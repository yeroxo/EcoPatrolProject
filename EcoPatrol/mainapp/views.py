from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.response import Response

from .models import Project
from .serializers import ProjectSerializer


# Create your views here.
class ProjectView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    # def perform_create(self, serializer):
    #     location = get_object_or_404(Location, id=self.request.data.get('location'))
    #     contact = get_object_or_404(Contact, id=self.request.data.get('contact'))
    #     return serializer.save(location=location, contact=contact)


class SingleProjectView(RetrieveUpdateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectsFromLocation(ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    # пробный метод гет, который будет отдавать города по запросу
    def list(self, request):
        # TODO сделать метод поиска подходящих объектов посмотреть метод фильтер
        # не забывать что в гетте строка и парсить в значение
        # x = Point(request.GET['Point1'])
        # y = Point(request.GET['Point2'])
        # projects = self.get_queryset()
        # for i in projects:
        #     if i.location == x.x:
        #         print('true')
        self.get_queryset().filter()
        a = self.get_queryset()
        lestok = [a[0]]

        a = ProjectSerializer(lestok, many=True)
        return Response(a.data)
