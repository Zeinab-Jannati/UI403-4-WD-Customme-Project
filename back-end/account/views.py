from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, permissions
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import NotFound, APIException 
from django.contrib.auth import authenticate 
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User 

from .serializers import RegisterDesignerSerializer, LoginSerializer, UserProfileSerializer
from .models import UserProfile 

class RegisterDesignerAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterDesignerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        
        is_designer_status = False
        if hasattr(user, 'profile'):
            is_designer_status = user.profile.is_designer
        
        return Response({
            "message": "Designer registered successfully!",
            "username": user.username,
            "email": user.email,
            "token": token.key,
            "is_designer": is_designer_status 
        }, status=status.HTTP_201_CREATED)

class LoginAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True) 
        
        username_or_email = serializer.validated_data['username']
        password = serializer.validated_data['password']
        
        authenticated_user = None

        authenticated_user = authenticate(request, username=username_or_email, password=password)

        if authenticated_user is None and '@' in username_or_email:
            try:
                user_by_email = User.objects.get(email=username_or_email)
                authenticated_user = authenticate(request, username=user_by_email.username, password=password)
            except User.DoesNotExist:
                pass 

        if authenticated_user is not None:
            token, created = Token.objects.get_or_create(user=authenticated_user)
            return Response({
                "message": "Login successful",
                "username": authenticated_user.username,
                "token": token.key,
                "is_designer": authenticated_user.profile.is_designer if hasattr(authenticated_user, 'profile') else False
            }, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "نام کاربری یا رمز عبور اشتباه است."}, status=status.HTTP_401_UNAUTHORIZED)

class UserProfileAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated] 

    def get_object(self):
        try:
            return self.request.user.profile
        except ObjectDoesNotExist:
            raise NotFound("Profile not found for this user.") 
        except Exception as e:
            print(f"Error fetching user profile for user {self.request.user.id}: {e}")
            raise APIException(detail="An unexpected error occurred while fetching profile.", code=status.HTTP_500_INTERNAL_SERVER_ERROR)

class LogoutAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            if hasattr(request.user, 'auth_token'):
                request.user.auth_token.delete()
                return Response({'detail': 'با موفقیت از سیستم خارج شدید.'}, status=status.HTTP_200_OK)
            else:
                return Response({'detail': 'توکنی برای حذف یافت نشد.'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(f"Error during logout for user {request.user.username}: {e}")
            return Response({'detail': f'خطا در خروج: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
