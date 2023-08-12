from django.contrib import admin
from django.urls import path
from home.views import Phonemod,Macmod,Padmod,Watchmod
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('iphone',Phonemod),
router.register('ipad',Padmod),
router.register('mac',Macmod),
router.register('watch',Watchmod)


urlpatterns = [
    path('admin/', admin.site.urls)
]+router.urls
