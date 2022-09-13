# First step
create a folder for your project and a virtual environment inside it: **virtualenv venv**

![venv](https://user-images.githubusercontent.com/84609153/189959256-176532f4-4d44-4353-a8d1-413c4bd62cd3.png)

# Second step
activate your venv: **venv\Scripts\activate**

![activate-venv](https://user-images.githubusercontent.com/84609153/189959494-87763a09-c879-455a-a679-bbb5cf3a1edc.png)

# Third step
"**Save Workspace As**"

![Workspace](https://user-images.githubusercontent.com/84609153/189959672-fcd692b4-0de8-440c-8b74-44c8af201f7c.png)

# Fourth step
create a '**requirements.txt**' file with the following packages:
- **django>=4.0.0,<4.1.0**
- **djangorestframework**
- **pyyaml**
- **requests**
- **django-cors-headers**

![requirements](https://user-images.githubusercontent.com/84609153/189959986-4967ce89-0cd1-4451-872c-1a156dcb2290.png)

# Fifth step
install the packages by running: **pip install -r requirements.txt**

# Sixth step
update your requirements.txt file: **pip freeze > requirements.txt**

# Seventh step
create a backend folder and inside it, run the following command: **django-admin startproject {your project} .**

# Eighth step
still inside the backend folder, create your first app: **python manage.py startapp {your app}**

# Ninth step
Inside your project folder, on settings.py, add your app name on "**INSTALLED_APPS**"
