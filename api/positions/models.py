from django.db import models

# Create your models here.
TYPE_CHOICES = [
    ('L', 'Local'),
]

class Location(models.Model):
    id = models.IntegerField(required=True, primary_key=True)
    street_code = models.IntegerField(required=True)
    street = models.CharField(required=True)
    district = models.CharField(blank=True)
    type = models.CharField(choices=TYPE_CHOICES, default = TYPE_CHOICES[0])

class TruckRoute(models.Model):
    sLocation = models.ForeignKey(Location, on_delete=models.CASCADE)
    dLocation = models.ForeignKey(Location, on_delete=models.CASCADE)
