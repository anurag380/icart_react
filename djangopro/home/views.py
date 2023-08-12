from django.shortcuts import render
from .models import Phone,Mac,Pad,Watch
from rest_framework.viewsets import ModelViewSet
from .serilalizer import Phonemodelserializer,Macmodelserializer,Padmodelserializer,Watchmodelserializer

# Create your views here.

class Phonemod(ModelViewSet):
    serializer_class=Phonemodelserializer
    queryset=Phone.objects.all()
    model=Phone

class Macmod(ModelViewSet):
    serializer_class=Macmodelserializer
    queryset=Mac.objects.all()
    model=Mac

class Padmod(ModelViewSet):
    serializer_class=Padmodelserializer
    queryset=Pad.objects.all()
    model=Pad

class Watchmod(ModelViewSet):
    serializer_class=Watchmodelserializer
    queryset=Watch.objects.all()
    model=Watch
