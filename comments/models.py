from django.db import models


class Comment(models.Model):
    """
    This model represents a comment on a post.

    Attributes:
        post (ForeignKey): The post that the comment belongs to.
        name (CharField): The name of the commenter.
        email (EmailField): The email address of the commenter.
        message (TextField): The content of the comment.
        date (DateTimeField): The date and time the comment was posted.
        photo (ImageField): An optional photo attached to the comment.
    """

    post = models.ForeignKey('posts.Post', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    # photo = models.ImageField(upload_to='comment_photos/', blank=True, null=True)

    def __str__(self):
        """
        Returns a string representation of the comment.
        """
        return f"Comment by {self.name} on {self.post}"
