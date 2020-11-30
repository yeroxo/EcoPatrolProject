from django.db import models


# Create your models here.


class Location(models.Model):
    x = models.FloatField(null=True)
    y = models.FloatField(null=True)

    def __str__(self):
        return f'x:{self.x},y:{self.y}'


class Project(models.Model):
    name = models.CharField(max_length=32)
    description = models.TextField()
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    text_location = models.TextField()
    picture = models.ImageField(upload_to='photos', max_length=1024)

    def __str__(self):
        return self.name


class Contact(models.Model):
    CONTACT_TYPE = (
        ('P', 'Phone'),
        ('E', 'Email'),
        ('TG', 'Telegram'),
    )
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='contacts')
    name = models.CharField(max_length=2, choices=CONTACT_TYPE)
    method = models.CharField(max_length=254)

    def __str__(self):
        return f'{self.name}:{self.method}'
