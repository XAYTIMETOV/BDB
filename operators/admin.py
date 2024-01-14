from django.contrib import admin

from .models import Operator
from django.utils.html import format_html


@admin.register(Operator)
class OperatorAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'photo', 'color_column', 'date')
    readonly_fields = ['img_preview']
