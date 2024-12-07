# JWT Authentication API

A robust REST API built with Node.js, Express, and MongoDB that implements JSON Web Token (JWT) based authentication. This API provides secure user registration, login, and user management functionality.

## Base URL

[https://authentication-with-jwt-z4k3.onrender.com](https://authentication-with-jwt-z4k3.onrender.com)

## Features

- **User Registration**: Secure signup with username, email, and password
- **User Authentication**: JWT-based login system
- **Protected Routes**: Endpoints secured with JWT middleware
- **User Management**: Fetch all users or specific user details
- **Session Management**: Secure logout functionality

## Technologies Used

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [JSON Web Tokens (JWT)](https://jwt.io/)
- **Password Hashing**: [bcrypt](https://www.npmjs.com/package/bcrypt)

## API Endpoints

### Categories API (`/api/v1/category`)

Base URL: `/api/v1/category`

- `POST /create`: Create a new category
- `GET /`: Retrieve all categories
- `DELETE /:id`: Delete a specific category

### Campaigns API (`/api/v1/tasks`)

Base URL: `/api/v1`

- `POST /register`: Create a new User.
- `POST /login`: Authenticate a user and receive a JWT Token.
- `GET  /all`: Retrieve a list of all users. Requires Authentication.
- `GET  /:id`: Retrieve details of a specific user by ID. Requires Authentication.
- `POST  /logout`: Logout the currently authenticated user.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- [Node.js](https://nodejs.org/) (v14 or later)
- MongoDB

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Ajoy-paul11/Authentication-with-JWT.git
   ```
2. Navigate to the project
   ```sh
   cd Authentication-With-JWT
   ```
3. Install NPM package
   ```sh
   npm install
   ```
4. Run development server
   ```sh
   npm run dev
   ```

## API Usage Examples

**Register a new User** - POST /api/v1/register

Content-Type: application/json

```sh
{
    "username": "example_user",
    "email": "user@example.com",
    "password": "Securepassword123"
}
```

**Create a Task** - POST /api/v1/login

Content-Type: application/json

```sh
 {
    "email": "user@example.com",
    "password": "securepassword123"
}

```

## Contact

---

<p align="left"> <a href="https://twitter.com/ajoy_paul11" target="blank"><img src="https://img.shields.io/twitter/follow/ajoy_paul11?logo=twitter&style=for-the-badge" alt="ajoy_paul11" /></a> </p>

<a href="https://linkedin.com/in/ajoypaul" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ajoypaul" height="30" width="40" /></a>
