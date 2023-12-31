# Generated by Django 3.2.16 on 2023-01-13 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Phone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('descri', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('display', models.CharField(max_length=100)),
                ('camera', models.CharField(max_length=25)),
                ('battery', models.CharField(max_length=25)),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
    ]
