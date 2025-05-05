# NodeExpress-CRUD-Vault

A simple and modular CRUD application built with Node.js and Express.js, demonstrating a clean MVVM architecture. The app allows users to create, read, update, and delete items, with a minimal frontend served via static HTML.

## 🚀 Features

* RESTful API for item management
* JSON-based data storage (no external database required)
* Static frontend served from the `public` directory
* Easy to extend and customize

## 📁 Project Structure

```
NodeExpress-CRUD-Vault/
├── controllers/          # Business logic for item operations
│   └── ItemController.js
├── models/               # Data access layer
│   └── ItemModel.js
├── views/                # Response formatting
│   └── ItemView.js
├── data/                 # JSON file for data persistence
│   └── items.json
├── public/               # Static frontend files
│   └── index.html
├── server.js             # Express server setup
├── package.json
├── .gitignore
```

## 🛠️ Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Prxyankaz/NodeExpress-CRUD-Vault.git
   cd NodeExpress-CRUD-Vault
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   node server.js
   ```

4. **Access the application:**

   Open your browser and navigate to `http://localhost:3000/`

## 🧪 API Endpoints

* `GET /items` - Retrieve all items
* `GET /items/:id` - Retrieve a specific item by ID
* `POST /items` - Create a new item
* `PUT /items/:id` - Update an existing item by ID
* `DELETE /items/:id` - Delete an item by ID

## 📄 Example Item Object

```json
{
  "ID": 1,
  "Name": "Sample Item",
  "Description": "This is a sample item."
}
```

## 🖥️ Frontend

The frontend is a simple HTML page located at `public/index.html`. It interacts with the backend API to perform CRUD operations and displays the list of items dynamically.
