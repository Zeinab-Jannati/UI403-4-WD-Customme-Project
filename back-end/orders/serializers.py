from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductSerializer
from orders.serializers import OrderSerializer

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['product', 'quantity', 'price', 'get_total_price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'total_amount', 'status', 'order_date', 'items']



class UserProfileSerializer(serializers.ModelSerializer):

    orders = OrderSerializer(many=True, read_only=True, source='user.orders')

    class Meta:
        model = UserProfile
        fields = [
            'orders' 
        ]
