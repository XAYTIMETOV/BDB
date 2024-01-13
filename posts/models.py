from django.db import models
from django.contrib.auth.models import User
from autoslug import AutoSlugField


class Post(models.Model):
    """
    This model represents a blog post.

    Attributes:
        operator (ForeignKey): The operator associated with the post.
        tag (ForeignKey): The tag associated with the post.
        staff (ForeignKey): The staff member associated with the post.
        slug (CharField): The slug for the post URL.
        title (CharField): The title of the post.
        body (TextField): The content of the post.
        likes (BigIntegerField): The number of likes for the post.
        date (DateTimeField): The date and time the post was created.
        keys (TextField): Additional keys or tags associated with the post.
    """

    operator = models.ForeignKey('operators.Operator', on_delete=models.CASCADE)
    tag = models.ForeignKey('tags.Tag', on_delete=models.SET_NULL, null=True)
    staff = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = AutoSlugField(populate_from='title')
    title = models.CharField(max_length=255)
    body = models.TextField()
    likes = models.BigIntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
    keys = models.TextField(null=True)

    def __str__(self):
        """
        Returns a string representation of the post.
        """
        return self.title
