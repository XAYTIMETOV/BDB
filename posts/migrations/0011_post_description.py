# Generated by Django 5.0.1 on 2024-01-26 22:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0010_remove_post_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='description',
            field=models.CharField(default='foydalanayotgan vaqtdagi operatsion tizim uchun trafik sarflanishi ham kiradi). Proksi-serverlar (shu jumladan VPN) orqali ishlaydigan ilovalardan foydalanganda ijt', max_length=255),
        ),
    ]
