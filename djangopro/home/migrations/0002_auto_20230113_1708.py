# Generated by Django 3.2.12 on 2023-01-13 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='battery',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='phone',
            name='camera',
            field=models.CharField(max_length=50),
        ),
    ]
