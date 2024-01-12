from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator
from posts.models import Post
from comments.models import Comment
from votes.models import Vote
from operators.models import Operator
from django.db.models import Q
from django.db.models import Sum


def home(request):
    if request.method == 'POST':
        oper = request.POST.get('oper')
        operator = get_object_or_404(Operator, pk=oper)
        operator.votes += 1
        operator.save()

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
    paginator = Paginator(posts, 1)

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

    return render(request, 'home.html', context)

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

    context = {
        'post': post,
    }

    return render(request, 'pages/article-more.html', context)
