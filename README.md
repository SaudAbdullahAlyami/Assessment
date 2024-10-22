This API allows you to manage a collection of books. You can add, retrieve, update, and delete books from a MySQL database.

## Authentication

Basic authentication is required for modifying (adding, updating, deleting) books. Use the following credentials:

- **Username**: `admin`
- **Password**: `password`

## API Endpoints

### 1. Add a New Book

- **Method**: `POST`
- **Endpoint**: `/api/books`
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedDate": "1925-04-10",
    "numberOfPages": 180
  }
  **Responses Body**:
    201:{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "numberOfPages": 180
  }
  500:{
  "error": "An error occurred while saving the book."
  }
  ```

### 2. Retrieve All Books

- **Method**: `GET`
- **Endpoint**: `/api/books`
- **Authentication**: Not required
- **Responses Body**:[
  {
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "numberOfPages": 180
  },
  ...
  ]

### 3. Retrieve All Books

- **Method**: `GET`
- **Endpoint**: `/api/books/:id`
- **Authentication**: Not required
- **Responses Body**:
  200 OK:{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "numberOfPages": 180
  }
  404 Not Found:{
  "error": "Book not found."
  }

### 3. Update a Specific Book

- **Method**: `PUT`
- **Endpoint**: `/api/books/:id`
- **Authentication**: required
- **Request Body**:{
  "title": "The Great Gatsby - Updated Edition",
  "numberOfPages": 200
  }
- **Responses Body**:
  200 OK:{
  "id": 1,
  "title": "The Great Gatsby - Updated Edition",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "numberOfPages": 200
  }
  404:{
  "error": "Book not found."
  }
  500:{
  "error": "An error occurred while updating the book."
  }

### 5. Delete a Book

- **Method**: `DELETE`
- **Endpoint**: `/api/books/:id`
- **Authentication**: required
- **Responses Body**:
  200:{
  "message": "Book successfully deleted."
  }
  404:{
  "error": "Book not found."
  }
  500:{
  "error": "An error occurred while updating the book."
  }
