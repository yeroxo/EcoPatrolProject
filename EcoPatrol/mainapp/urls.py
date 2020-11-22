from django.urls import path

from .views import ProjectView, SingleProjectView, ProjectsFromLocation

app_name = "mainapp"

urlpatterns = [
    path('projects/', ProjectView.as_view()),
    path('project/<int:pk>', SingleProjectView.as_view()),
    # path('project', ProjectsFromLocation.as_view())
    path('projects/location', ProjectsFromLocation.as_view())
]
