import { readItems, writeItems } from '../models/ItemModel.js';

export async function getAllItems() {
  return await readItems();
}

export async function getItemById(id) {
  const items = await readItems();
  return items.find(item => item.id === id);
}

export async function createItem(newItem) {
  const items = await readItems();
  newItem.id = Date.now(); // Simple unique ID
  items.push(newItem);
  await writeItems(items);
  return newItem;
}

export async function updateItem(id, updatedFields) {
  const items = await readItems();
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return null;

  items[index] = { ...items[index], ...updatedFields };
  await writeItems(items);
  return items[index];
}

export async function deleteItem(id) {
  let items = await readItems();
  const originalLength = items.length;
  items = items.filter(item => item.id !== id);
  if (items.length === originalLength) return false;

  await writeItems(items);
  return true;
}
