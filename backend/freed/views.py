from django.contrib.auth import authenticate, login
# from django.contrib.auth.models import User
from .models import User
from django.shortcuts import render
from dotenv import load_dotenv
import os
import requests
from rest_framework import generics
from rest_framework import authentication, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime, timedelta, timezone
import json
from rest_framework.parsers import JSONParser

from .models import Freelancer, Recruiter
from .serializers import FreelancerSerializer, RecruiterSerializer


load_dotenv()

moralis_api_key = os.getenv('MORALIS_APIKEY')

def my_profile(request):
    return render(request, 'profile.html', {})

def moralis_auth(request):
    return render(request, 'login.html', {})

class SendChallengeView(APIView):
    """
    Using Moralis, set up a view that sends a challenge to the frontend.
    """

    def post(self, request):
        # print(moralis_api_key)
        # print(request.data)
        # Set challenge deadline
        present = datetime.now(timezone.utc)
        present_plus_one_m = present + timedelta(minutes=1)
        expirationTime = str(present_plus_one_m.isoformat())
        expirationTime = str(expirationTime[:-6]) + 'Z'

        # Moralis Authentication API
        REQUEST_URL = 'https://authapi.moralis.io/challenge/request/evm'

        # Assuming 'data' is coming from the request body
        data = request.data

        request_object = {
            "domain": "Freed",
            "chainId": 1,
            "address": data['address'],
            "statement": "Please confirm",
            "uri": "https://defi.finance/",
            "expirationTime": expirationTime,
            "notBefore": "2020-01-01T00:00:00.000Z",
            "timeout": 15
        }

        try:
            x = requests.post(
                REQUEST_URL,
                json=request_object,
                headers={'X-API-KEY': moralis_api_key})

            # print(x)

            if x.status_code in [200, 201]:
                return Response(json.loads(x.text), status=status.HTTP_200_OK)
            else:
                return Response(json.loads(x.text), status=status.HTTP_400_BAD_REQUEST)
        except requests.exceptions.RequestException as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class VerifyMessageView(APIView):
    """
    Verifies a message using Moralis and handles user authentication.
    """

    def post(self, request):
        # The commented codes are Testing purpose. Do not Test in Production

        # print(request.data)

        # # Parse JSON data from request using DRF's JSONParser
        # parser = JSONParser()
        # try:
        #     data = parser.parse(request)
        # except Exception as e:
        #     return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        data = json.loads(request.body)
        print(data)

        REQUEST_URL = 'https://authapi.moralis.io/challenge/verify/evm'


        x = requests.post( REQUEST_URL,
                          json=data,
                          headers={'X-API-KEY': moralis_api_key})

        print(x.status_code)
        print(x.text)
        print(json.loads(x.text).get('address'))

        if x.status_code == 201:
            # User can authenticate
            eth_address = json.loads(x.text).get('address')
            try:
                user = User.objects.get(address=eth_address)
            except User.DoesNotExist:
                username = request.data.username
                email = request.data.email
                role = request.data.role
                user = User(
                    username=username,
                    address=eth_address,
                    email=email,
                    role=role)
                user.is_staff = False
                user.is_superuser = False
                user.save()

                curr_user = User.objects.filter(address=eth_address)[0]
                if curr_user.role == 'F':
                    f = Freelancer( user=User.objects.get(address=eth_address).id,
                                    email=User.objects.get(address=eth_address).email
                                )
                    f.save()
                elif curr_user.role == 'R':
                    r = Recruiter(  user=User.objects.get(address=eth_address).id,
                                    email=User.objects.get(address=eth_address).email
                                )
                    r.save()

            if user is not None and user.is_active:
                login(request, user)
                request.session['auth_info'] = data
                request.session['verified_data'] = json.loads(x.text)
                return Response({'user': user.username, 'address': user.address}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'account disabled'}, status=status.HTTP_403_FORBIDDEN)
        else:
            x = requests.post(
                REQUEST_URL,
                json=data,
                headers={'X-API-KEY': moralis_api_key})
            print(x.status_code)
            return Response(json.loads(x.text), status=status.HTTP_400_BAD_REQUEST)

    # return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




class FreelancerListCreateView(generics.ListCreateAPIView):
    queryset = Freelancer.objects.all()
    serializer_class = FreelancerSerializer

class FreelancerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Freelancer.objects.all()
    serializer_class = FreelancerSerializer

class RecruiterListCreateView(generics.ListCreateAPIView):
    queryset = Recruiter.objects.all()
    serializer_class = RecruiterSerializer

class RecruiterRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recruiter.objects.all()
    serializer_class = RecruiterSerializer


class ListUsers(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        usernames = [user.username for user in User.objects.all()]
        return Response(usernames)













"""
science hamster hand fetch ahead relief village copper mimic valve between bacon
"""

