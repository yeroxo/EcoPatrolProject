from django import forms

from .models import Contact, Project


class ProjectForm(forms.ModelForm):
    contact_field = forms.ModelMultipleChoiceField(queryset=Contact.objects.none())

    class Meta:
        model = Project
        fields = ('name', 'description', 'contact_field', 'location', 'text_location', 'picture')

    def __init__(self, contact, *args, **kwargs):
        super(ProjectForm, self).__init__(*args, **kwargs)
        self.fields['contact'].queryset = contact
