from django.db import models

# Create your models here.
class Phone(models.Model):
    name=models.CharField(max_length=25)
    descri=models.CharField(max_length=100)
    price=models.IntegerField()
    display=models.CharField(max_length=100)
    camera=models.CharField(max_length=50)
    battery=models.CharField(max_length=50)
    image=models.ImageField(upload_to='images')

    def __str__(self):
        return self.name

class Mac(models.Model):
    name=models.CharField(max_length=25)
    descri=models.CharField(max_length=100)
    price=models.IntegerField()
    display=models.CharField(max_length=100)
    cpu=models.CharField(max_length=100)
    memory=models.CharField(max_length=50)
    battery=models.CharField(max_length=50)
    image=models.ImageField(upload_to='images')

    def __str__(self):
        return self.name

class Pad(models.Model):
    name=models.CharField(max_length=50)
    descri=models.CharField(max_length=100)
    price=models.IntegerField()
    image=models.ImageField(upload_to='images')

    def __str__(self):
        return self.name

class Watch(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    dsize=models.CharField(max_length=100)
    display=models.CharField(max_length=100)
    image=models.ImageField(upload_to='images')

    def __str__(self):
        return self.name


