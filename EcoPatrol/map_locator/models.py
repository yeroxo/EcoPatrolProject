from django.contrib.gis.db import models


# Create your models here.


class Project(models.Model):
    name = models.CharField('Название проекта', max_length=32)
    description = models.TextField('Описание проекта')
    longitude = models.FloatField('Широта', null=True, blank=True)
    latitude = models.FloatField('Долгота', null=True, blank=True)
    text_location = models.TextField('Описание местоположения')
    picture = models.ImageField(upload_to='photos', max_length=1024)

    def __str__(self):
        return self.name


class Contact(models.Model):
    CONTACT_TYPE = (
        ('N', 'Organisator fullname'),
        ('ON', 'Organization Name'),
        ('P', 'Phone'),
        ('E', 'Email'),
        ('TG', 'Telegram'),
    )
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='contacts')
    name = models.CharField(max_length=2, choices=CONTACT_TYPE)
    method = models.CharField(max_length=254)

    def __str__(self):
        return f'{self.name}:{self.method}'
