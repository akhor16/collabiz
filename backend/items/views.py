from django.shortcuts import get_object_or_404, render, redirect
from .serializers import ItemSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Item


from django.core.paginator import Paginator


class ItemsView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

    def list(self, request):
        perPage = 10
        allItems = Item.objects.all()
        p = Paginator(allItems, perPage)
        page_num = request.GET.get('page', 1)
        print("page numiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:", page_num)
        queryset = p.page(page_num)
        serializer = ItemSerializer(queryset, many=True)
        return Response(serializer.data)


def product_delete_view(request, id):
    obj = get_object_or_404(Item, id=id)
    obj.delete()
    return redirect("../")
