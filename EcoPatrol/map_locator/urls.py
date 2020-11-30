from rest_framework import routers

from .views import ProjectView

app_name = 'map_locator'

router = routers.SimpleRouter()
# router.register(r'location', ProjectsFromLocation, 'ProjectsFromLocation')
router.register(r'api/projects', ProjectView, 'ProjectView')
urlpatterns = router.urls
# urlpatterns = [
#     # path('projects/', ProjectView.as_view()),
#     # path('project/<int:pk>', SingleProjectView.as_view()),
#     # path('project', ProjectsFromLocation.as_view())
#     path('projects/location', ProjectsFromLocation.as_view())
# ]
