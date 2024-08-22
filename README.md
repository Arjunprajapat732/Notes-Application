**Notes Application**
This Notes Application is built using React for the frontend and Laravel for the backend, providing a seamless and efficient note-taking experience. The Laravel backend manages the API for handling notes, while the React frontend leverages modern tools such as Bootstrap for styling, React Router for navigation, Axios for API requests, and React Hot Toast for notifications. The project is structured with both the frontend and backend in a single repository to simplify setup and development. Follow the setup instructions below to quickly get the application running on your local environment.

**Table of Contents**
Prerequisites
Repository Setup
Backend Setup (Laravel)
Frontend Setup (React)
Running the Application
Key Technologies Used
**Prerequisites**
XAMPP or another local server environment for running PHP and MySQL.
Node.js and npm installed on your machine.

**Repository Setup**
Clone the Repository
1] git clone https://github.com/Arjunprajapat732/Notes-Application.git cd Notes-Application
Switch to the Master Branch
2] git checkout master

--------------------------------------------------------------------------Backend Setup (Laravel)------------------------------------------------------------
Start XAMPP

Ensure Apache and MySQL services are running.
Navigate to the Backend Directory
1] cd backend-laravel
Install PHP Dependencies
2] composer update
Set Up Environment File
Copy .env.example to .env and configure your environment settings:
3] cp .env.example .env
Generate a new application key
4] php artisan key:generate
Update the database connection settings in the .env file
5] DB_DATABASE=backend_laravel
Run Migrations
6] php artisan migrate
7] php artisan serve
-------------------------------------------------------------------------Frontend Setup (React)-------------------------------------------------------------------
Navigate to the Frontend Directory
1] cd frontend-react
Install Node.js Dependencies
2] npm install
3] npm start
