from rest_framework import serializers

from .models import Project, Contact, Location


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('name', 'method')


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('x', 'y')


class ProjectSerializer(serializers.ModelSerializer):
    location = LocationSerializer(many=False, read_only=True)
    contact = ContactSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('name', 'description', 'location', 'text_location', 'picture', 'contact')
