

### The project idea 
 Enter and track your team's time in the multifunctional app.  A person can easily sign into their unique account.  Users can track their time by project, by day, or by team. Time can be set as billable or not. Simple navigation to a report window where a user can see their history.

### Your tech stack (frontend, backend, database)

## Built With - front end
   
* [React.js](https://reactjs.org/)
* [ReactBootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Material ui](https://mui.com/getting-started/installation/)
* [Figma](https://www.figma.com/)


### Built With - back end
* [python](https://www.python.org/)
* [postman](https://www.postman.com/)
* [Postgres](https://www.postgresql.org/)
* [flask](https://flask.palletsprojects.com/en/2.1.x/)

### List of backend models and their properties

-still in progress but so far I have

class Timesheet(models.Model):
    notes = CharField(max_length=150)
    billable = BooleanField(default=False)
    hourly_rate = DecimalField(max_digits=8, decimal_places=2, null=True)
    workday_start =CharField(null=True)
    workday_end = CharField(null=True)
    calendar_day = CharField(null=True)
    total_bill = DecimalField(max_digits=8, decimal_places=2, null=True)


 
class User(UserMixin, Model):
    email = CharField(unique=True)
    password = CharField()



### User stories
 

- as a user I should be able to login to my account
- as a user I should be able to set my billable rate for a project
- as a user I should be able to log my hours and track the total over time

- as a user I  would expect a report /dashboard where I can see and edit my previous timesheets
- 
### Wireframes

https://www.figma.com/file/sAKbGRsfI7FiLi4wKNKf6M/Untitled

