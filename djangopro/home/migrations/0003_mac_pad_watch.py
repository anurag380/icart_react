# Generated by Django 3.2.16 on 2023-01-13 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20230113_1708'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mac',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('descri', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('display', models.CharField(max_length=100)),
                ('cpu', models.CharField(max_length=50)),
                ('memory', models.CharField(max_length=50)),
                ('battery', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
        migrations.CreateModel(
            name='Pad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('descri', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
        migrations.CreateModel(
            name='Watch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('price', models.IntegerField()),
                ('dsize', models.CharField(max_length=100)),
                ('display', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
    ]
