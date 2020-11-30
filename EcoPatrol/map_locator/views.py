from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from .models import Project
from .serializers import ProjectSerializer


# Create your views here.
class ProjectView(mixins.RetrieveModelMixin,
                  mixins.ListModelMixin, GenericViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

# class SingleProjectView(RetrieveUpdateAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer


# class ProjectsFromLocation(ListCreateAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer
#
#     # пробный метод гет, который будет отдавать города по запросу
#     def list(self, request, *args, **kwargs):
#         request.query_params.get('x1')
#         request.query_params.get('y1')
#         request.query_params.get('x2')
#         request.query_params.get('y2')
#
#         # не забывать что в гетте строка и парсить в значение
#         # x = Point(request.GET['Point1'])
#         # y = Point(request.GET['Point2'])
#         # projects = self.get_queryset()
#         # for i in projects:
#         #     if i.location == x.x:
#         #         print('true')
#         self.get_queryset().filter()
#         a = self.get_queryset()
#         lestok = [a[0]]
#
#         a = ProjectSerializer(lestok, many=True)
#         return Response(a.data)
