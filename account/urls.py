from django import views
from django.conf import settings
from . import views
from django.urls import path, include
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.home, name="home"), 
    path('dashboard', views.dashboard, name="dashboard"), 
    path('login', views.login, name="login"), 
    path('logout', views.logout, name="logout"), 
    path('register', views.register, name="register"),
    path('ticket', views.ticket, name="ticket"),
    path('ticketconf', views.ticketconf, name="ticketconf"),
    path('password_reset/',auth_views.PasswordResetView.as_view(),name='password_reset'),
    path('password_reset/done/',auth_views.PasswordResetDoneView.as_view(),name='password_reset_done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
    path('reset/done/',auth_views.PasswordResetCompleteView.as_view(),name='password_reset_complete'),
    path('tickettemp', views.tickettemp, name="tickettemp"),
    path('viewticket/<str:pk>',views.viewticket, name="viewticket"),
    path('faq',views.faq, name="faq"),
    path('test',views.test, name="test"),
]+ static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)