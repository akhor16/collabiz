from django.http.response import HttpResponse
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
        item_id = request.GET.get('id', -1)
        if item_id != -1:
            serializer = ItemSerializer(
                Item.objects.get(id=item_id), many=False)
            return Response(serializer.data)
        perPage = 30
        allItems = Item.objects.all()

        p_category = request.GET.get('category', '/')
        if p_category != '/':
            allItems = Item.objects.filter(category=p_category)
        page_num = request.GET.get('page', '1')
        p = Paginator(allItems, perPage)
        queryset = p.page(page_num)
        serializer = ItemSerializer(queryset, many=True)

        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        title = request.data['title']
        category = request.data['category']
        description = request.data['description']
        photoUrl = request.data['photoUrl']
        Item.objects.create(title=title, category=category,
                            description=description, photoUrl=photoUrl)
        return HttpResponse({'message': 'Item successfully placed on Collabiz'}, status=200)


def product_delete_view(request, id):
    obj = get_object_or_404(Item, id=id)
    obj.delete()
    return redirect("../")
