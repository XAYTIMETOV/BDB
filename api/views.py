# views.py
from rest_framework import viewsets
from posts.models import Post
from operators.models import Operator
from comments.models import Comment
from tags.models import Tag

from .serializers import PostListSerializer, PostDetailSerializer, OperatorListSerializer, OperatorDetailSerializer, CommentSerializer, TagSerializer


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    def get_serializer_class(self):
        if self.action == 'list':
            return PostListSerializer
        return PostDetailSerializer


class OperatorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Operator.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return OperatorListSerializer
        return OperatorDetailSerializer


class OperatorPostsView(viewsets.ReadOnlyModelViewSet):
    serializer_class = PostListSerializer

    def get_queryset(self):
        operator_id = self.kwargs['operator_id']
        return Post.objects.filter(operator__id=operator_id)


class CommentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentPostView(viewsets.ReadOnlyModelViewSet):
    serializer_class = PostDetailSerializer

    def get_queryset(self):
        comment_id = self.kwargs['comment_id']
        return Post.objects.filter(comment__id=comment_id)

class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class TagPostsView(viewsets.ReadOnlyModelViewSet):
    serializer_class = PostListSerializer

    def get_queryset(self):
        tag_id = self.kwargs['tag_id']
        return Post.objects.filter(tag__id=tag_id)
