from rest_framework import serializers
from .models import Phone,Mac,Pad,Watch


class Phonemodelserializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
        fields = '__all__'

class Macmodelserializer(serializers.ModelSerializer):   
    class Meta:
        model = Mac
        fields = '__all__'

class Padmodelserializer(serializers.ModelSerializer):
    class Meta:
        model = Pad
        fields = '__all__'

class Watchmodelserializer(serializers.ModelSerializer):
    class Meta:
        model = Watch
        fields = '__all__'
