from django.contrib.gis.db.models import PointField, PolygonField
from django.db import models
from django.db.models import F
from rest_framework import mixins, generics, exceptions
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


class ProjectsFromLocation(generics.ListAPIView, GenericViewSet):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """

        if not self.request.query_params.get('x1'):
            raise exceptions.ValidationError(detail='x1 is required')
        else:
            x1 = float(self.request.query_params.get('x1'))

        if not self.request.query_params.get('y1', False):
            raise exceptions.ValidationError(detail='y1 is required')
        else:
            y1 = float(self.request.query_params.get('y1'))

        if not self.request.query_params.get('x2', False):
            raise exceptions.ValidationError(detail='x2 is required')
        else:
            x2 = float(self.request.query_params.get('x2'))

        if not self.request.query_params.get('y2', False):
            raise exceptions.ValidationError(detail='y2 is required')
        else:
            y2 = float(self.request.query_params.get('y2'))

        store_queryset = Project.objects.annotate(
            point=models.expressions.Func(
                F('longitude'), F('latitude'),
                function='ST_Point',
                output_field=PointField()
            ),
            poly=models.expressions.Func(
                x1, y1, x2, y2,
                srid=4326,
                function='ST_MakeEnvelope',
                output_field=PolygonField()
            )
        ).filter(poly__contains=F('point'))

        if len(store_queryset) <= 0:
            raise exceptions.ValidationError(detail='По данному запросу нет подходящих проектов')
        return store_queryset
