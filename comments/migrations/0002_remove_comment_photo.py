# Generated by Django 5.0.1 on 2024-01-13 00:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='photo',
        ),
    ]