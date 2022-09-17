from rest_framework import serializers
from rest_framework.reverse import reverse

from .validators import validate_title_no_hello, unique_product_title
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
  title = serializers.CharField(validators=[validate_title_no_hello, unique_product_title])
  # name = serializers.CharField(source='title', read_only=True)
  class Meta:
    model = Product
    fields = [
      # 'user',
      'detail_url',
      'edit_url',
      'id',
      'title',
      # 'name',
      'content',
      'price',
      'sale_price',
      'my_discount'
    ]

  # def validate_title(self, value):
  #   request = self.context.get('request')
  #   user = request.user
  #   qs = Product.objects.filter(user=user, title__iexact=value)
  #   if qs.exists():
  #     raise serializers.ValidationError(f"{value} is already a product name.")
  #   return value

  # def create(self, validated_data):
  #   # email = validated_data.pop('email')
  #   obj = super().create(validated_data)
  #   # print(email, obj)
  #   return obj

  # def update(self, instance, validated_data):
  #   email = validated_data.pop('email')
  #   return super().update(instance, validated_data)

  def get_edit_url(self,obj):
    return get_url(self, obj, 'product-update')

  def get_my_discount(self, obj):
    if not hasattr(obj, 'id'):
      return None
    if not isinstance(obj, Product):
      return None
    return obj.get_discount()
