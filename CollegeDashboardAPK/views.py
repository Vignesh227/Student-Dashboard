from django.shortcuts import render
from django.shortcuts import render, redirect
from django.views import View

# Create your views here.

# Home Page 
class index(View):
    def get(self, request):
        return render(request, 'index.html')

# Contact Page
class contact(View):
    def get(self, request):
        return render(request, 'contact.html')