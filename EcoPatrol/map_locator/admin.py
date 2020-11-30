from django.contrib import admin

from .models import Project, Location, Contact


class ContactsInLine(admin.StackedInline):
    verbose_name_plural = "Контакты"
    verbose_name = "Контакт"
    model = Contact
    extra = 0


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    fields = ('x', 'y')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    inlines = [ContactsInLine]
    field = LocationAdmin
    list_filter = ['id']
    search_fields = ['name']
