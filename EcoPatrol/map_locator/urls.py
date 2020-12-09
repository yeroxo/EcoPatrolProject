from rest_framework import routers

from .views import ProjectView, ProjectsFromLocation

app_name = 'map_locator'

router = routers.SimpleRouter()
router.register(r'api/location', ProjectsFromLocation, 'ProjectsFromLocation')
router.register(r'api/projects', ProjectView, 'ProjectView')
urlpatterns = router.urls
