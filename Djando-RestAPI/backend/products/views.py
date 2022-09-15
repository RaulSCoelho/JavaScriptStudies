from rest_framework import authentication ,generics, mixins, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from api.authentication import TokenAuthentication

from .models import Product
from .permissions import IsStaffEditorPermission
from .serializers import ProductSerializer

# region FIRST WAY YOU CAN BUILD YOUR VIEW
class ProductListCreateAPIView(generics.ListCreateAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  authentication_classes = [authentication.SessionAuthentication, TokenAuthentication]
  permission_classes = [permissions.IsAdminUser ,IsStaffEditorPermission]

  def perform_create(self, serializer):
    # serializer.save(user=self.request.user)
    title = serializer.validated_data.get('title')
    content = serializer.validated_data.get('content') or None
    if content is None:
      content = title
    serializer.save(content=content)


class ProductDetailAPIView(generics.RetrieveAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  # lookup_field = 'pk' ??


class ProductUpdateAPIView(generics.UpdateAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()
    if not instance.content:
      instance.content = instance.title


class ProductDeleteAPIView(generics.DestroyAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  lookup_field = 'pk'

  def perform_destroy(self, instance):
    super().perform_destroy(instance)
# endregion

# region SECOND WAY YOU CAN BUILD YOUR VIEW
class ProductMixinView(
  mixins.CreateModelMixin,
  mixins.ListModelMixin,
  mixins.RetrieveModelMixin,
  generics.GenericAPIView):

  queryset = Product.objects.all()
  serializer_class = ProductSerializer

  def get(self, request, *args, **kwargs):
    pk = kwargs.get('pk')
    if pk is not None:
      return self.retrieve(request, *args, **kwargs)
    return self.list(request, *args, **kwargs)

  def post(self, request, *args, **kwargs):
    return self.create(request, *args, **kwargs)

  def update(self, request, *args, **kwargs):
    return self.list(request, *args, **kwargs)

  def delete(self, request, *args, **kwargs):
    return self.list(request, *args, **kwargs)

  def perform_create(self, serializer):
    content = serializer.validated_data.get('content') or None
    if content is None:
      content = 'This is a single view doing cool stuff'
    serializer.save(content=content)
# endregion

# region THIRD WAY YOU CAN BUILD YOUR VIEW
@api_view(['GET', 'POST'])
def product_alt_view(request, pk=None, *args, **kwargs):

  if request.method == 'GET':
    if pk is not None:
      # Detail View
      obj = get_object_or_404(Product, pk=pk)
      data = ProductSerializer(obj).data
      return Response(data)
    # List View
    queryset = Product.objects.all()
    data = ProductSerializer(queryset, many=True).data
    return Response(data)

  if request.method == 'POST':
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      title = serializer.validated_data.get('title')
      content = serializer.validated_data.get('content') or None
      if content is None:
        content = title
      serializer.save(content=content)
      return Response(serializer.data)
# endregion
