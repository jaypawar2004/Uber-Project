# **Backend API Documentation**

## **1. `/users/register` Endpoint**

### **Description**
This endpoint allows the registration of a new user by creating an account with the provided details.

---

### **HTTP Method**
`POST`

---

### **Request Body**
The request body must be in JSON format and include the following fields:

| Field          | Type   | Required | Description                                           |
|-----------------|--------|----------|-------------------------------------------------------|
| `fullname`      | Object | Yes      | Object containing the user's full name.              |
| `firstname`     | String | Yes      | User's first name (minimum 3 characters).            |
| `lastname`      | String | No       | User's last name (minimum 3 characters).             |
| `email`         | String | Yes      | User's email address (must be a valid email).        |
| `password`      | String | Yes      | User's password (minimum 6 characters).              |

---

### **Example Request**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}


## **2. `/users/login` Endpoint**

### **Description**
Authenticates a user using their email and password, returning a JWT token upon successful login.

---

### **HTTP Method**
`POST`

---

### **Endpoint**
`/users/login`

---

### **Request Body**
The request body must be in JSON format and include the following fields:

| Field      | Type   | Required | Description                                           |
|------------|--------|----------|-------------------------------------------------------|
| `email`    | String | Yes      | User's email address (must be a valid email).         |
| `password` | String | Yes      | User's password (minimum 6 characters).               |

---

### **Example Request**
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
