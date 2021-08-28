from django.shortcuts import get_object_or_404, render, redirect
from .serializers import ItemSerializer
from rest_framework import viewsets
from .models import Item


class ItemsView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()


def product_delete_view(request, id):
    obj = get_object_or_404(Item, id=id)
    obj.delete()
    return redirect("../")
