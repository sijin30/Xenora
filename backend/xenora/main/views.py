# views.py
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from .models import *
from django.contrib.auth import authenticate,login,logout

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        password = data['password']

        # ✅ Set username to email for consistent login
        Register.objects.create_user(username=email, password=password, email=email)
        return JsonResponse({'message': 'User created'}, status=201)

@csrf_exempt
def do_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data, 'gyhj')
        
        user = authenticate(request, username=data['email'], password=data['password'])

        if user is not None:
            login(request, user)

            # Create dictionary to return user data (avoid returning Django object directly)
            user_data = {
                'username': user.username,
                'email': user.email,
            }

            return JsonResponse({'message': 'Login successful', 'user_data': user_data}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)
