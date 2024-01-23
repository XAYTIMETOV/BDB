from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from django.core.paginator import Paginator
from django.db.models import Q
from django.db.models import Sum
from django.utils.translation import gettext as _

from posts.models import Post
from comments.models import Comment
from votes.models import Vote
from operators.models import Operator


def home(request):
    query = request.GET.get('q')
    tag = request.GET.get('tag')
    company = request.GET.get('com')
    if tag:
        posts = Post.objects.filter(tag__name=tag)
    elif company:
        posts = Post.objects.filter(operator__name=company)
    elif query:
        posts = Post.objects.filter(
            Q(title__icontains=query) |
            Q(body__icontains=query) |
            Q(tag__name__icontains=query)
        )
    else:
        posts = Post.objects.all()
    paginator = Paginator(posts, 12)

    page_number = request.GET.get("page")
    posts = paginator.get_page(page_number)
    # Retrieve all comments
    comments = Comment.objects.all().order_by('-date')[:6]

    # Retrieve all votes
    votes = Vote.objects.all()

    # Retrieve all operators
    operators = Operator.objects.all()

    total_votes = Operator.objects.aggregate(total_votes=Sum('votes'))['total_votes']

    for operator in operators:
        operator.percentage = (100 / total_votes) * operator.votes

    context = {
        'posts': posts,
        'comments': comments,
        'votes': votes,
        'operators': operators,
        'total_votes': total_votes,
    }


    if request.method == 'POST':
        oper = request.POST.get('oper')
        operator = get_object_or_404(Operator, pk=oper)
        operator.votes += 1
        operator.save()
        context['vote'] = True
        response = render(request, 'home.html', context)
        response.set_cookie('vote', 'true')
        return response

    trans = _("You have voted")
    context['trans'] = trans
    response = render(request, 'home.html', context)
    return response

def all_comments(request):
    comments = Comment.objects.all()

    context = {
        'comments': comments,
    }

    return render(request, 'pages/all-comments.html', context)

def post(request, slug):
    if request.method == "POST":
        post = get_object_or_404(Post, slug=slug)
        Comment.objects.create(
            post=post,
            name=request.POST.get('name'),
            email=request.POST.get('email'),
            message=request.POST.get('commentary')
        ).save()

    post = get_object_or_404(Post, slug=slug)

    all_posts = Post.objects.all()

    similar_posts = Post.find_similar_posts(post, all_posts, n=4)

    context = {
        'post': post,
        'similar_posts': similar_posts,
    }

    return render(request, 'pages/article-more.html', context)

def like_post(request, slug):
    """
    View function to handle liking a post.
    Assumes you have a URL pattern like '/like_post/<int:slug>/' in your urls.py.
    """
    if request.method == 'GET':
        post = get_object_or_404(Post, slug=slug)

        post.like()
    return redirect('post', slug=slug)