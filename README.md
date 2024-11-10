# Web Product Catalogue

**Web application for product catalogue management built in Node.js and MongoDB**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-0078D4?style=for-the-badge&logo=lock&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![Multer](https://img.shields.io/badge/Multer-FF0000?style=for-the-badge&logo=upload&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-8C8C8C?style=for-the-badge&logo=ejs&logoColor=white)
![Express Session](https://img.shields.io/badge/Express--Session-000000?style=for-the-badge&logo=express&logoColor=white)
![Cookie Parser](https://img.shields.io/badge/Cookie--Parser-FFD700?style=for-the-badge&logo=cookie&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Json2csv](https://img.shields.io/badge/Json2csv-000000?style=for-the-badge&logo=json&logoColor=white)



![HomePage view](./screenshots/homepage.JPG)

## About this Application 📝

This is a web application developed using Express.js, MongoDB and EJS. The main features are:
- Product catalogue with filtering and search capabilities
- User login and registration with session support
- CSV file generation with product list
- Support for user accounts with roles (user/administrator)
- API for product and user management
- EJS views with dynamic layouts

 
## Table of contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Launching the application](#starting-application)
- [Features](#features)
- [Screenshots](#screenshots)
- [API Endpoints](#api-endpoints)
- [Data models](#description-data-models)
- [Author](#author)
- [Licence](#licence)

## Requirements

- **Node.js** (version 14 or higher)
- **MongoDB** (locally or on MongoDB Atlas)
- Installed Node.js packages (versions used in the project):
  - ✅ `express` ^4.19.2
  - ✅ `mongoose` ^8.3.2
  - ✅ `bcrypt` ^5.1.1
  - ✅ `dotenv` ^16.4.5
  - ✅ `multer` ^1.4.5-lts.1
  - ✅ `ejs` ^3.1.10
  - ✅ `express-session` ^1.18.0
  - ✅ `cookie-parser` ^1.4.6
  - ✅ `bootstrap` ^5.3.3
  - ✅ `json2csv` ^6.0.0-alpha.2
- 
## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/web-product-catalogue.git
cd web-product-catalogue
```

2. **Install dependencies:**
```bash
npm install
```

## Configuration

Create an .env file and configure it:

```js
PORT=9999
DATABASE=your_mongodb_uri
SESSION_KEY_SECRET=your_session_secret_key
```

## Launching the application

starting the application in development mode
🚀🚀🚀🚀🚀🚀
```bash
npm run watch
```

## Features

- <strong>Gift set management</strong> - viewing, adding, editing and deleting products
- <strong>User registration and log-in</strong> - registration and log-in forms, user authorisation
- <strong>Administration panel</strong> - managing product catalogue contents
- <strong>Exporting data to CSV</strong> - downloading CSV files with the list of products
- <strong>Searching and filtering</strong> - possibility of searching for products and filtering by price
- <strong>Middleware</strong> - ensuring secure access to the administration panel and user sessions

## Screenshots

![Admin Panel view](./screenshots/adminPanel.JPG)
##### Admin Panel

![User Panel view](./screenshots/giftsets.JPG)
##### User Panel

![Registration form view](./screenshots/registration.JPG)
##### Registration form

## API Endpoints

#### GiftSetController

- ```GET /sets``` - displays a list of gift sets
- ```GET /sets/:name``` - displays details of a single set
- ```POST /admin/sets/add``` - adds a new set (multer file handling)
- ```POST /admin/sets/:name/edit``` - edits an existing set (file handling)
- ```GET /admin/sets/:name/delete``` - removes a set from the database
- ```GET /admin/sets/:name/delete-image``` - deletes an image assigned to a set
- ```GET /csv``` - generates and downloads a CSV file with the product data

####  UserController

- ```GET /registration``` - registration form
- ```POST /registration``` - new user registration
- ```GET /login``` - login form
- ```POST /login``` - user login
- ```GET /logout``` - user logout
- ```GET /profile``` - displays the profile editing form
- ```POST /profile``` - update user profile data

#### PageController

- ```GET /``` - application home page
- ```GET /*``` - 404 error handling

## Data models

#### GiftSet model
Stores data on sets, including:

- ```name``` (String, required)
- ```slug``` (String, required, unique)
- ```price``` (Number, required)
- ```image``` (String)

#### User model
Stores user data:

- ```email``` (String, required, unique)
- ```password``` (String, required, hashed before saving)
- ```isAdmin``` (Boolean, false by default)
- ```firstName```, ```lastName``` (String, optional)

## Author 

This project was created by Krzysztof Rudnicki 😄

## License

This project is licensed under MIT rules.







