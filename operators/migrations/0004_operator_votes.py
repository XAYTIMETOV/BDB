# Generated by Django 5.0.1 on 2024-01-12 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('operators', '0003_alter_operator_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='operator',
            name='votes',
            field=models.IntegerField(default=0),
        ),
    ]
