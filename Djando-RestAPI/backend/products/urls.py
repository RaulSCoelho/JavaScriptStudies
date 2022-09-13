from django.urls import path

from . import views

urlpatterns = [
  path('', views.ProductMixinView.as_view()),
  path('<int:pk>/', views.ProductMixinView.as_view()),
  path('<int:pk>/update/', views.ProductUpdateAPIView.as_view()),
  path('<int:pk>/delete/', views.ProductDeleteAPIView.as_view())
]
