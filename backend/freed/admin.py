from django.contrib import admin
from .models import User, Freelancer, Recruiter, FreelancerProject, JobListing, JobListingApplication


admin.site.register(User)
admin.site.register(Freelancer)
admin.site.register(Recruiter)
admin.site.register(FreelancerProject)
admin.site.register(JobListing)
admin.site.register(JobListingApplication)




