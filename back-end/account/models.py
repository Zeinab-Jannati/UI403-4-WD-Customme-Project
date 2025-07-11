from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserProfile(models.Model):
    # connecting the defualt django user app to my desiner
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')

    phone_number = models.CharField(max_length=20, blank=True, null=True, unique=True)
    national_code = models.CharField(max_length=10, blank=True, null=True, unique=True)
    birth_date = models.DateField(blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    province = models.CharField(max_length=100, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    # profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    # this field makes it clear if it is a designer or a simple user
    is_designer = models.BooleanField(default=False)

    education = models.CharField(max_length=255, blank=True, null=True)
    job = models.CharField(max_length=255, blank=True, null=True)
    telephone_number = models.CharField(max_length=20, blank=True, null=True)
    zip_code = models.CharField(max_length=10, blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):

    try:
        instance.profile.save()
    except UserProfile.DoesNotExist:
        UserProfile.objects.create(user=instance)