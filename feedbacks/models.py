from django.db import models
from django.contrib.auth.models import User


class Feedback(models.Model):
    """
    This model represents a feedback submitted by a user.

    Attributes:
        name (CharField): The name of the user submitting the feedback.
        email (EmailField): The email address of the user.
        topic (CharField): The topic of the feedback.
        message (TextField): The content of the feedback message.
        to_whom (ForeignKey): The staff member responsible for handling the feedback.
    """

    name = models.CharField(max_length=255)
    email = models.EmailField()
    topic = models.CharField(max_length=255)
    message = models.TextField()
    to_whom = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        """
        Returns a string representation of the feedback.
        """
        return f"Feedback from {self.name} - {self.topic}"
