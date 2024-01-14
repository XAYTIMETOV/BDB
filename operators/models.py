from django.db import models
from autoslug import AutoSlugField
from django.utils.html import mark_safe


class Operator(models.Model):
    """
    This model represents an operator.

    Attributes:
        name (CharField): The operator's name.
        slug (SlugField): A unique identifier for the operator.
        photo (ImageField): The operator's photo.
        date (DateTimeField): The date the operator was created.
    """

    name = models.CharField(max_length=255)
    slug = AutoSlugField(populate_from='name')
    photo = models.ImageField(upload_to='operators/photos', blank=True, null=True)
    votes = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
    color_column = models.CharField(max_length=255, null=True, default="#FFFFFF")

    def img_preview(self):  # new
        return mark_safe(f'<img src = "{self.photo.url}" width = "300"/>')

    def __str__(self):
        """
        Returns the operator's name.
        """
        return self.name
