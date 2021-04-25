# contact-info-app
This is test app developed using Angular 11. The main idea behind this application is that user can see, add, update and delete contacts.

Technologies used in this application: Angular 11, Bootstrap 4, HTML and SCSS.

Key Features: Single Page Application, Lazy Loading, Toastr, Responsive design

Folder structure:
├───dist
│   └───contact-info-app
├───e2e
└───src
    ├───app
    │   ├───components
    │   │   ├───contact-list
    │   │   └───page-not-found
    │   ├───modals
    │   └───shared
    │       ├───constants
    │       └───services
    ├───assets
    └───environments

# Steps to run the application (need nodejs and git installed on to the machine)

- Need to clone https://github.com/skacharde/contact-info-app.git on local mochine

- Navigate to the Project folder

- Need to run "npm install" to install the required packages

- run > "npm install -g json-server" to install fake API point

- run > "json-server --watch db.json" to start fake API point

- run "ng serve -o" OR "npm start" command   
	
Repo URL: https://github.com/skacharde/contact-info-app

APP Url: https://skacharde.github.io/contact-info-app/contact-list