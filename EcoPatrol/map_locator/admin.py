from django.contrib.gis import admin
from django.contrib.gis.db import models

from .models import Project, Contact


class ContactsInLine(admin.StackedInline):
    verbose_name_plural = "Контакты"
    verbose_name = "Контакт"
    model = Contact
    extra = 0


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    inlines = [ContactsInLine]
    list_filter = ['id']
    search_fields = ['name']
