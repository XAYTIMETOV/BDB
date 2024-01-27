# serializers.py
from rest_framework import serializers
from posts.models import Post
from operators.models import Operator
from comments.models import Comment
from tags.models import Tag

class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'likes', 'operator', 'description', 'tag', 'date']
        read_only_fields = ['slug', 'date', 'likes']

class PostDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ['slug', 'date', 'likes']

class OperatorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Operator
        fields = ['id', 'name', 'votes', 'img_preview', 'date', 'color_column']
        read_only_fields = ['slug', 'date', 'votes', 'img_preview']

class OperatorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Operator
        fields = ['id', 'name', 'votes', 'img_preview', 'date', 'color_column', 'posts']
        read_only_fields = ['slug', 'date', 'votes', 'img_preview']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
