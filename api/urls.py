# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, OperatorViewSet, OperatorPostsView, CommentViewSet,CommentPostView, TagPostsView, TagViewSet

router = DefaultRouter()

router.register(r'posts', PostViewSet, basename='post')
router.register(r'operators', OperatorViewSet, basename='operator')
router.register(r'comments', CommentViewSet, basename='comment')
router.register(r'tags', TagViewSet, basename='tag')

app_name = 'api'

urlpatterns = [
    path('', include(router.urls)),
    path('operators/<int:operator_id>/posts/', OperatorPostsView.as_view({'get': 'list'}), name='operator-posts'),
    path('comments/<int:comment_id>/post/', CommentPostView.as_view({'get': 'list'}), name='comment-post'),
    path('tags/<int:tag_id>/posts/', TagPostsView.as_view({'get': 'list'}), name='tag-post'),
]
