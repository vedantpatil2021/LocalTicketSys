from statistics import mode
from time import time
from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Ticketgeneration(models.Model):
    ticketid = models.CharField(max_length=36,null=True)
    username = models.CharField(User,max_length=100,null=True,blank=True)
    email = models.EmailField(max_length=254)
    checkbox = models.CharField(max_length=256)
    adult = models.CharField(max_length=100)
    fromstation = models.CharField(max_length=256)
    tostation = models.CharField(max_length=256)
    rate = models.CharField(max_length=100)
    date = models.CharField(max_length=250)
    time = models.TimeField(null=True)
    usermessage = models.CharField(max_length=500)
    razorpay_order_id = models.CharField(max_length=100, null=True, blank=True)
    razorpay_payment_id = models.CharField(max_length=100, null=True, blank=True)
    razorpay_payment_signature = models.CharField(max_length=100, null=True, blank=True)
    

class UserOTP(models.Model):
	user = models.ForeignKey(User, on_delete = models.CASCADE)
	time_st = models.DateTimeField(auto_now = True)
	otp = models.SmallIntegerField()
