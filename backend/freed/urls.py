from django.views.generic import TemplateView
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from . import views

urlpatterns = [
    path('docs/', TemplateView.as_view(
        template_name='docs.html',
        extra_context={'schema_url':'api_schema'}
        ), name='swagger-ui'),
    path('moralis_auth', views.moralis_auth, name='moralis_auth'),
    path('my_profile', views.my_profile, name='my_profile'),
    path('request_message', views.SendChallengeView.as_view(), name='request_message'),
    path('verify_message', views.VerifyMessageView.as_view(), name='verify_message'),
    path('freelancer_list', views.FreelancerListCreateView.as_view(), name='freelancer list'),
    path('freelancer-retriever-update-destroy', views.FreelancerRetrieveUpdateDestroyView.as_view(), name='freelancer retriever update destroy'),
    path('recruiter-list-create', views.RecruiterListCreateView.as_view(), name='Recruiter List Create'),
    path('recruiter-retrieve-update-destroy', views.RecruiterRetrieveUpdateDestroyView.as_view(), name='Recruiter Retrieve Update Destroy'),
]
