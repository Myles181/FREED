from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    class Roles(models.TextChoices):
        FREELANCER = 'F', 'Freelancer'
        RECRUITER = 'R', 'Recruiter'

    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    address = models.CharField(max_length=255, unique=True)
    role = models.CharField(max_length=1, choices=Roles.choices, default=Roles.FREELANCER)

class Skill(models.Model):
    name = models.CharField(max_length=100, unique=True)

class Social(models.Model):
    discord = models.CharField(max_length=100, unique=True, null=True)
    twitter = models.CharField(max_length=100, unique=True, null=True)
    github = models.CharField(max_length=100, unique=True, null=True)

class Freelancer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=100, unique=True)
    bio = models.TextField(null=True)
    avatar = models.CharField(max_length=100, null=True)
    portfolio_url = models.CharField(max_length=100, unique=True, null=True)
    socials = models.ManyToManyField(Social)
    skills = models.ManyToManyField(Skill)

class FreelancerProject(models.Model):
    freelancer = models.ForeignKey(Freelancer, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField()

class Recruiter(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField()
    name = models.CharField(max_length=100)
    bio = models.TextField()
    about = models.TextField()
    profile_pic_url = models.CharField(max_length=100)
    website_url = models.CharField(max_length=100)
    socials = models.ManyToManyField(Social)

class JobListing(models.Model):
    location = models.CharField(max_length=100)
    recruiter = models.ForeignKey(Recruiter, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    body = models.TextField()
    posted_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    payment = models.IntegerField()

class JobListingApplication(models.Model):
    freelancer = models.ForeignKey(Freelancer, on_delete=models.CASCADE)
    proposal = models.TextField()
    job_listing = models.ForeignKey(JobListing, on_delete=models.CASCADE)
    applied_at = models.DateTimeField()
    accepted = models.BooleanField(default=False)
    recruiter_done = models.BooleanField(default=False)
    freelancer_done = models.BooleanField(default=False)
