from django.urls import path
from . import views

app_name = 'pages'

urlpatterns = [
    path('', views.home, name='home'),
    path('comments/', views.all_comments, name='comments'),
    path('posts/<slug:slug>/', views.post, name='post'),
    path('like_post/<slug:slug>/', views.like_post, name='like_post'),
]
