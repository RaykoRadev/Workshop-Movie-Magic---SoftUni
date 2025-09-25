# movie-magic-sept-2025

SoftUni JS Back-End Course Workshop

## Development Steps

### Setup

-   [x] Initialize Project
-   [x] Add Express Server `npm i express`
-   [x] Config debugging
-   [x] Add Workshop Resources
-   [x] Setup Handlebars `npm i express-handlebars`
-   [x] Setup static files
-   [x] Render Home Page
-   [x] Add Layout
-   [x] Render About Page

### Architecture and dynamic rendering

-   [x] Add home controller
-   [x] Add movie data layer
-   [x] Add movie service
-   [x] Render movies on home page
-   [x] Show no movies screen

### Create Movie

-   [x] Add Movie Controller
-   [x] Show create movie page
-   [x] Add routes
-   [x] Add 404 page
-   [x] Ready body data
-   [ ] Create movie
    -   [x] Add action
    -   [x] Add service
    -   [x] Add model method for creating movie
-   [x] Redirect after creation
-   [x] Add unique id for each cerated movie

### Details

-   [x] Add navigation button for detail page
-   [x] Add route with param for details page
-   [x] GetOne movie from service
-   [x] Find movie by id from model
-   [x] Render details page with dynamic data

### Search

-   [x] Show static search page
-   [x] Render all movies
-   [x] Modify search form
-   [x] Filter movies
    -   [x] By year
    -   [x] By genre
    -   [x] By title
-   [x] Remember search words

### Bonuses

-   [ ] Dynamic page title
-   [x] Rating (temp solution)
-   [x] File Persistance

### Setup Database

-   [x] Install mongoose npm i mongoose
-   [x] Connect to DB

### Refactor Movies to use mongoose

-   [x] Add movie model
-   [x] Create movie schema
-   [x] Create movie model
-   [x] Import file movies to database !DON'T IMPORT IDs
-   [ ] Fix own property handlebars problem with lean method
-   [x] General fix for own property problem
-   [x] Refactor details
-   [x] Refactor create
-   [x] Refactor search

### Add Cast

-   [x] Add new resources
-   [] Create Cast Controller
-   [] Create Cast Page
-   [] Add Cast model
-   [] Create Cast Service
-   [] Create Cast Functionallity

### Attach Cast to Movie (relations)

-   [] Add attach cast button
-   [] Add attach cast page
-   [] Add dynamic data to cast page
-   [] Show cast list in attach select
-   [] Add relation between cast and movie
-   [] Attach cast functionallity

### Show Cast Details (population)

-   [] Get movie casts filtered
-   [] Show casts on details
-   [] Get movie casts using population

### Bonuses

-   [] Filter casts if they are already attached
-   [] Env variables
-   [] name in movie
-   [] Back refference from vscode
-   [] Add movie views to a folder
