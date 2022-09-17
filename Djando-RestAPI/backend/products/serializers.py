from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import Product

def get_url(self, obj, url_name):
  request = self.context.get('request')
  if request is None:
    return None

  return reverse(url_name, kwargs={'pk': obj.pk}, request=request)

class ProductSerializer(serializers.ModelSerializer):
  my_discount = serializers.SerializerMethodField(read_only=True)
  detail_url = serializers.HyperlinkedIdentityField(view_name='product-detail')
  edit_url = serializers.SerializerMethodField(read_only=True)
  class Meta:
    model = Product
    fields = [
      'detail_url',
      'edit_url',
      'id',
      'title',
      'content',
      'price',
      'sale_price',
      'my_discount'
    ]

  def get_edit_url(self,obj):
    return get_url(self, obj, 'product-update')

  def get_my_discount(self, obj):
    if not hasattr(obj, 'id'):
      return None
    if not isinstance(obj, Product):
      return None
    return obj.get_discount()
