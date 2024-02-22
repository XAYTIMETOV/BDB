from django.contrib import admin
from django.conf import settings
from django.urls import path, include, re_path
# from django.conf.urls.i18n import i18n_patterns
# from django.utils.translation import gettext_lazy as _
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pages.urls', namespace='pages')),
    path('api/', include('api.urls', namespace='api')),
    path("django-check-seo/", include("django_check_seo.urls")),
]

# urlpatterns += i18n_patterns(
# )
#
# if 'rosetta' in settings.INSTALLED_APPS:
#     urlpatterns += [
#         re_path(r'^rosetta/', include('rosetta.urls'))
#     ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)