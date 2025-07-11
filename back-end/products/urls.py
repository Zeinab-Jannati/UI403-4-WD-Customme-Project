from django.urls import path
from .views import ProductCreateAPIView, ProductListAPIView, CategoryListAPIView, ProductDetailAPIView # <--- ProductDetailAPIView را ایمپورت کنید

urlpatterns = [
    path('create/', ProductCreateAPIView.as_view(), name='product-create'),
    path('', ProductListAPIView.as_view(), name='product-list'),
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    
    path('<int:id>/', ProductDetailAPIView.as_view(), name='product-detail'),
]