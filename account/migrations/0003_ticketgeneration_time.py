# Generated by Django 4.0.2 on 2022-04-02 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_rename_user_ticketgeneration_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticketgeneration',
            name='time',
            field=models.TimeField(null=True),
        ),
    ]
