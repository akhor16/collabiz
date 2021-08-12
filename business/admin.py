from django.contrib import admin
from .models import ListProducts

class ListProductsAdmin(admin.ModelAdmin):
  list = ('p1_title', 'p1_description', 'p1_photo_url')

admin.site.register(ListProducts, ListProductsAdmin)