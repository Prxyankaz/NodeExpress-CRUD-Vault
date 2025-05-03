import fs from 'fs/promises';
const filePath = new URL('../data/items.json', import.meta.url);

export async function readItems() {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function writeItems(items) {
  await fs.writeFile(filePath, JSON.stringify(items, null, 2));
}
