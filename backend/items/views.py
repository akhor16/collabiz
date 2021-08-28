from django.shortcuts import render
from .serializers import ItemSerializer
from rest_framework import viewsets
from .models import Item


class ItemsView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
