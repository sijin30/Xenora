# backend/xenora/main/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup),
    path('login/', views.do_login),  # ✅ make sure this is present
]
