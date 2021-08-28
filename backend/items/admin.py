from django.contrib import admin
from .models import Item


class ItemAdmin(admin.ModelAdmin):
    list = ("title", "category", "description", "photoUrl")


admin.site.register(Item, ItemAdmin)
