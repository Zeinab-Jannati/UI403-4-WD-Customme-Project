from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Product, Category 
from .serializers import ProductSerializer, CategorySerializer
from django.db.models import F 

class ProductCreateAPIView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        if (self.request.user.is_authenticated and
            hasattr(self.request.user, 'profile') and
            self.request.user.profile.is_designer):
            serializer.save(designer=self.request.user.profile)
        else:
            raise serializer.ValidationError({"detail": "فقط طراحان مجاز به ایجاد محصول هستند."})


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        queryset = super().get_queryset()

        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by == 'best_sellers':
            queryset = queryset.order_by('-sales_count') 
        elif sort_by == 'new_arrivals':
            queryset = queryset.order_by('-created_at')
        # elif sort_by == 'price_asc':
        #     queryset = queryset.order_by('price')
        # elif sort_by == 'price_desc':
        #     queryset = queryset.order_by('-price')

        category_slug = self.request.query_params.get('category', None)
        if category_slug:
            try:
                category = Category.objects.get(slug=category_slug) 
                queryset = queryset.filter(category=category)
            except Category.DoesNotExist:
                queryset = Product.objects.none()


        return queryset

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [permissions.AllowAny]


class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'id'