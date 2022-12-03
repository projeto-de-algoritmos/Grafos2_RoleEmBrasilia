from django.shortcuts import render
from django.http import JsonResponse 
from rest_framework import serializers
from .serializers import TestSerializer

# Create your views here.
def test_greetings(request):
    data = {}
    data['message'] = 'result'
    return JsonResponse(TestSerializer(data).data)
