from django.db import models


class Item(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.TextField()
    photoUrl = models.ImageField(upload_to='images')

    def _str_(self):
        return self.title
