from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import UserProfile

class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False 
    verbose_name_plural = 'profile'


class UserAdmin(BaseUserAdmin):
    inlines = (UserProfileInline,)
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'get_phone_number', 'get_is_designer')

    def get_phone_number(self, obj):
        return obj.profile.phone_number
    get_phone_number.short_description = 'Phone Number'

    def get_is_designer(self, obj):
        return obj.profile.is_designer
    get_is_designer.boolean = True 
    get_is_designer.short_description = 'Is Designer'

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
