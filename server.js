import express from 'express';
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} from './controllers/ItemController.js';

import { formatItem, formatItems } from './views/ItemView.js';

const app = express();


app.use(express.json());
app.use(express.static('public'));


app.get('/items', async (req, res) => {
  const items = await getAllItems();
  res.json(formatItems(items));
});

app.get('/items/:id', async (req, res) => {
  const item = await getItemById(Number(req.params.id));
  item ? res.json(formatItem(item)) : res.status(404).send('Item not found');
});

app.post('/items', async (req, res) => {
  const newItem = await createItem(req.body);
  res.status(201).json(formatItem(newItem));
});

app.put('/items/:id', async (req, res) => {
  const updatedItem = await updateItem(Number(req.params.id), req.body);
  updatedItem ? res.json(formatItem(updatedItem)) : res.status(404).send('Item not found');
});

app.delete('/items/:id', async (req, res) => {
  const success = await deleteItem(Number(req.params.id));
  success ? res.sendStatus(204) : res.status(404).send('Item not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
