from django.db import models

CATEGORY_CHOICES = (
    ("ELECTRONICS", "Electronics"),
    ("LIQUIDS", "Liquids"),
    ("NATURAL GOODS", "Natural Goods"),
    ("CHEMICALS", "Chemicals"),
)


class Item(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    description = models.TextField()
    photoUrl = models.ImageField(upload_to='images')

    def _str_(self):
        return self.title
