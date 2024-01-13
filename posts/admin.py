from django.contrib import admin
from .models import Post
from comments.models import Comment


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'operator', 'tag', 'date', 'staff')
    list_filter = ('operator', 'tag')
    search_fields = ('title', 'body')
    inlines = [CommentInline]

    def get_fields(self, request, obj=None):
        fields = super().get_fields(request, obj)

        # Exclude desc_en and desc_ru when adding a new object
        if not obj:
            fields = [f for f in fields if f not in ['likes', 'staff']]

        return fields

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.staff = request.user
        super().save_model(request, obj, form, change)