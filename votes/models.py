from django.db import models


class Vote(models.Model):
    """
    This model represents a vote on a specific item by a user.

    Attributes:
        item (ForeignKey): The item being voted on.
        voices (IntegerField): The number of voices for the vote.
        date (DateTimeField): The date and time the vote was cast.
    """

    item = models.ForeignKey('operators.Operator', on_delete=models.CASCADE)
    voices = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
