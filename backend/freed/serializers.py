from rest_framework import serializers
from .models import User, Skill, Social, Freelancer, FreelancerProject, Recruiter, JobListing, JobListingApplication

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name']

class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = ['id', 'discord', 'twitter', 'github']

class FreelancerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    socials = SocialSerializer(many=True)
    skills = SkillSerializer(many=True)

    class Meta:
        model = Freelancer
        fields = ['id', 'user', 'email', 'bio', 'avatar', 'portfolio_url', 'socials', 'skills']

class FreelancerProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerProject
        fields = ['id', 'freelancer', 'title', 'description', 'created_at']

class RecruiterSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    socials = SocialSerializer(many=True)

    class Meta:
        model = Recruiter
        fields = ['id', 'user', 'email', 'name', 'bio', 'about', 'profile_pic_url', 'website_url', 'socials']

class JobListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobListing
        fields = ['id', 'location', 'recruiter', 'title', 'description', 'body', 'posted_at', 'updated_at', 'payment']

class JobListingApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobListingApplication
        fields = ['id', 'freelancer', 'proposal', 'job_listing', 'applied_at', 'accepted', 'recruiter_done', 'freelancer_done']


