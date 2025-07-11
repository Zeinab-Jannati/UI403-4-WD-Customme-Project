from django.db import models
from account.models import UserProfile
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "Categories" 

    def save(self, *args, **kwargs):
        if not self.slug: 
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Product(models.Model):
    desinger = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='desinged_products')
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='products')

    sales_count = models.IntegerField(default=0)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name

# @property
# def image_url(self):
#     if self.image and hasattr(self.image, 'url'):
#         return self.image.url
#     return None

 
