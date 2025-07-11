from rest_framework import serializers
from .models import Product, Category 
from account.serializers import UserProfileSerializer 


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug'] 
        
class ProductSerializer(serializers.ModelSerializer):
    designer = UserProfileSerializer(read_only=True)
    image_url = serializers.SerializerMethodField()

    category_info = CategorySerializer(source='category', read_only=True) 
    # category_name = serializers.CharField(source='category.name', read_only=True)


    class Meta:
        model = Product
        fields = [
            'id', 'designer', 'name', 'description', 'price',
            'image', 'image_url', 'category', 'category_info',
            'sales_count', 'created_at', 'updated_at' 
        ]
        read_only_fields = ['id', 'designer', 'created_at', 'updated_at', 'image_url', 'category_info'] 

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None