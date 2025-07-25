from django.contrib.auth.models import AbstractUser
from django.db import models

class Register(AbstractUser):  # <-- extend AbstractUser instead of models.Model
    # Add custom fields if needed, for example:
    phone = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.username

class Order(models.Model):
    user = models.ForeignKey(Register,on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    amount = models.IntegerField(default=0)


