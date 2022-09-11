# First step
create a virtual env: **python3 -m venv venv**

# Second step
activate your venv: **. .\venv\bin\activate**

# Third step
"**Save Workspace As**"

# Fourth step
create a '**requirements.txt**' file with the following packages:
- **django>=4.0.0,<4.1.0**
- **djangorestframework**
- **pyyaml**
- **requests**
- **django-cors-headers**

# Fifth step
install the packages by running: **pip install -r requirements.txt**

# Sixth step
upgrade pip: **python3.exe -m pip install --upgrade pip**

# Seventh step
create a backend folder and inside it, and run the following command: **django-admin startproject {your project} .**

# Eighth step
still inside the backend folder, create your first app: **python manage.py startapp {your app}**

# Ninth step
Inside your project folder, on settings.py, add your app name on "**INSTALLED_APPS**"
