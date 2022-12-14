from django.contrib import admin
from .models import *

admin.site.register(Service)
admin.site.register(Appointment)
admin.site.register(Customer)
admin.site.register(Booking_Paid)