from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('comments/', views.all_comments, name='comments'),
    path('posts/<slug:slug>/', views.post, name='post'),
]
