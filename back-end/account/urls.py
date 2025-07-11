from django.urls import path
from .views import RegisterDesignerAPIView, LoginAPIView, UserProfileAPIView, LogoutAPIView

urlpatterns = [
    path('register-designer/', RegisterDesignerAPIView.as_view(), name='register_designer'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('profile/', UserProfileAPIView.as_view(), name='user_profile'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
]