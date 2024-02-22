from django.db import models
from django.contrib.auth.models import User
from autoslug import AutoSlugField
from ckeditor.fields import RichTextField
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from django.db import IntegrityError

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
    slug = AutoSlugField(populate_from='title', unique=True)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    body = RichTextField()
    likes = models.BigIntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
    keys = models.TextField(null=True)

    def get_plain_text_body(self):
        """
        Returns the plain text content of the post's body.
        """
        # You may need to adapt this based on the actual structure of your RichTextField
        return self.body

    @classmethod
    def find_similar_posts(cls, target_post, posts, n=5):
        """
        Finds and returns the top N similar posts to the target post.

        Parameters:
            target_post (Post): The target post for which to find similar posts.
            posts (QuerySet): All posts to compare against.
            n (int): Number of similar posts to retrieve.

        Returns:
            list: Top N similar posts.
        """
        # Extract plain text content from posts
        post_texts = [post.get_plain_text_body() for post in posts]

        # Add the target post to the list
        post_texts.append(target_post.get_plain_text_body())

        # Create a TF-IDF vectorizer
        vectorizer = TfidfVectorizer()

        # Transform the post texts into TF-IDF vectors
        tfidf_matrix = vectorizer.fit_transform(post_texts)

        # Calculate the cosine similarity between the target post and all other posts
        cosine_similarities = linear_kernel(tfidf_matrix[-1], tfidf_matrix[:-1]).flatten()

        # Get the indices of posts sorted by similarity
        similar_post_indices = cosine_similarities.argsort()[::-1]

        # Get the top N similar posts
        top_similar_posts = [posts[int(i)] for i in similar_post_indices[1:n+1]]

        return top_similar_posts

    def __str__(self):
        """
        Returns a string representation of the post.
        """
        return self.title

    def save(self, *args, **kwargs):
        """
        Override the save method to handle duplicate slugs.
        """
        try:
            super().save(*args, **kwargs)
        except IntegrityError:
            # If a UNIQUE constraint failed (duplicate slug), handle it here
            self.slug = f"{self.slug}-duplicate"  # Modify the slug (append '-duplicate')
            super().save(*args, **kwargs)

    def like(self):
        """
        Increments the number of likes for the post.
        """
        self.likes += 1
        self.save()
