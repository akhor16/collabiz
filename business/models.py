from django.db import models

# Create your models here.
class ListProducts(models.Model):
    p1_title = models.CharField(max_length=120)
    p1_description = models.TextField()
    p1_photo_url = models.TextField()
    
    def _str_(self):
        return self.title