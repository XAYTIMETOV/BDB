from django.contrib import admin

from .models import Operator


@admin.register(Operator)
class OperatorAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'photo', 'date')
    readonly_fields = ['img_preview', ]
