from django.db import models
from autoslug import AutoSlugField


class Tag(models.Model):
    """
    This model represents a tag for categorizing content.

    Attributes:
        name (CharField): The name of the tag.
        slug (SlugField): A unique identifier for the tag.
    """

    name = models.CharField(max_length=255)
    slug = AutoSlugField(populate_from='name')

    def __str__(self):
        """
        Returns the name of the tag.
        """
        return self.name
