# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
import uuid

from .models import UserProfile

class RegisterDesignerSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True, required=True, max_length=150)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    # full_name = serializers.CharField(write_only=True, required=True, max_length=150)

    # UserProfile fields that are received from the frontend
    phone_number = serializers.CharField(write_only=True, required=True, max_length=20)
    national_code = serializers.CharField(write_only=True, required=True, max_length=10)
    birth_date = serializers.DateField(write_only=True, required=False, allow_null=True)
    city = serializers.CharField(write_only=True, required=False, allow_blank=True, max_length=100)
    province = serializers.CharField(write_only=True, required=False, allow_blank=True, max_length=100)
    address = serializers.CharField(write_only=True, required=False, allow_blank=True)
    education = serializers.CharField(write_only=True, required=False, allow_blank=True, max_length=255)
    job = serializers.CharField(write_only=True, required=False, allow_blank=True, max_length=255)
    telephone_number = serializers.CharField(write_only=True, required=False, allow_blank=True, max_length=20)
    zip_code = serializers.CharField(write_only=True, required=False, allow_blank=True, max_length=10)


    class Meta:
        model = User
        fields = [
            'username', 'email', 'password', 
            'phone_number', 'national_code', 'birth_date', 'city', 'province', 'address',
            'education', 'job', 'telephone_number', 'zip_code'
        ]
        extra_kwargs = {
            'email': {'required': True},
        }

    def validate(self, data):
        # if not data.get('full_name', '').strip():
        #     raise serializers.ValidationError({"full_name": "نام و نام خانوادگی نمی‌تواند خالی باشد."})

        if User.objects.filter(username=data['username']).exists():
            raise serializers.ValidationError({"username": "این نام کاربری قبلا استفاده شده است."})

        # Validate email uniqueness
        if User.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError({"email": "این ایمیل قبلا استفاده شده است."})

        # Validate UserProfile unique fields (phone_number, national_code)
        if UserProfile.objects.filter(phone_number=data['phone_number']).exists():
            raise serializers.ValidationError({"phone_number": "این شماره موبایل قبلا ثبت شده است."})

        if UserProfile.objects.filter(national_code=data['national_code']).exists():
            raise serializers.ValidationError({"national_code": "این کد ملی قبلا ثبت شده است."})

        try:
            validate_password(data['password'])
        except ValidationError as e:
            raise serializers.ValidationError({"password": list(e.messages)})

        return data

    def create(self, validated_data):
        # Pop UserProfile related data
        profile_data = {
            'phone_number': validated_data.pop('phone_number'),
            'national_code': validated_data.pop('national_code'),
            'birth_date': validated_data.pop('birth_date', None),
            'city': validated_data.pop('city', ''),
            'province': validated_data.pop('province', ''),
            'address': validated_data.pop('address', ''),
            'education': validated_data.pop('education', ''),
            'job': validated_data.pop('job', ''),
            'telephone_number': validated_data.pop('telephone_number', ''), 
            'zip_code': validated_data.pop('zip_code', ''), 
            'is_designer': True,
        }

        # Pop full_name and password for separate handling
        # full_name = validated_data.pop('full_name').strip()
        password = validated_data.pop('password')
        email = validated_data.get('email', '')

        # Generate a unique username based on email and a UUID suffix
        # base_username = email.split('@')[0].replace('.', '').replace('+', '') if email else str(uuid.uuid4()).replace('-', '')
        # username = base_username[:30] # Limit to 30 chars for initial username
        # counter = 1
        # while User.objects.filter(username=username).exists():
        #     username = f"{base_username[:20]}_{counter}" 
        #     counter += 1
        
        # validated_data['username'] = username

        # name_parts = full_name.split(' ', 1)
        # validated_data['first_name'] = name_parts[0]
        # validated_data['last_name'] = name_parts[1] if len(name_parts) > 1 else ''

        user = User.objects.create_user(**validated_data) 
        user.set_password(password)
        user.save()

        if hasattr(user, 'profile'):
            for attr, value in profile_data.items():
                setattr(user.profile, attr, value)
            user.profile.save()
        else:
            UserProfile.objects.create(user=user, **profile_data)

        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)


class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True) 
    email = serializers.EmailField(source='user.email', read_only=True)

    username = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = UserProfile
        fields = [
            'username', 'email',
            'phone_number', 'national_code', 'birth_date',
            'city', 'province', 'address',
            'education', 'job', 'telephone_number', 'zip_code',
            'is_designer'
        ]
        read_only_fields = ['is_designer', 'national_code', 'username', 'email', 'username'] 

    def get_username(self, obj):
        return f"{obj.user.username}".strip()

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', {})
        user_instance = instance.user

        user_instance.email = user_data.get('email', user_instance.email)
        user_instance.save()

        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.birth_date = validated_data.get('birth_date', instance.birth_date)
        instance.city = validated_data.get('city', instance.city)
        instance.province = validated_data.get('province', instance.province)
        instance.address = validated_data.get('address', instance.address)
        # instance.profile_picture = validated_data.get('profile_picture', instance.profile_picture)
        instance.education = validated_data.get('education', instance.education)
        instance.job = validated_data.get('job', instance.job)
        instance.telephone_number = validated_data.get('telephone_number', instance.telephone_number) 
        instance.zip_code = validated_data.get('zip_code', instance.zip_code) 
        
        instance.save()

        return instance
