![image](https://github.com/user-attachments/assets/51752932-48e0-4163-ae92-e434d44a73aa)

# Role-Based Access Control (RBAC) System

This project implements a **Role-Based Access Control** (RBAC) system using **Node.js**, **Express.js**, and **MongoDB Atlas**. It allows administrators, managers, and users to have different levels of access and control over resources, with the ability to manage roles and permissions efficiently.

## Features

- **Role-Based Access Control** for users (Admin, Manager, User).
- **Admin** role has full control over the system, including managing users and roles.
- **Manager** role has limited access, usually for managing specific resources but not overall system control.
- **User** role has basic access to the system, with restrictions based on their assigned role.

## Tech Stack

- **Node.js**: JavaScript runtime for the server-side logic.
- **Express.js**: Web framework for handling HTTP requests and routing.
- **MongoDB Atlas**: Cloud-based MongoDB database for storing user data and roles.
- **JWT (JSON Web Token)**: Used for authenticating and authorizing users.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Create a free account and set up a cluster)
- [Git](https://git-scm.com/)
