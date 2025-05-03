import express from 'express';  // Import the Express framework
import fs from 'fs';            // Node.js built-in module for file system operations
import jwt from 'jsonwebtoken';  // Library to create and verify JWTs (JSON Web Tokens)

const app = express();  // Create an Express application
app.use(express.json()); // Middleware to parse JSON request bodies

const secretKey = process.env.SECRET_KEY;  