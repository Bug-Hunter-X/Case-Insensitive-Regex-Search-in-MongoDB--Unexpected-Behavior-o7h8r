```javascript
const query = { name: /John/i }; // Case-insensitive search

// ... more code ...

const cursor = db.collection('users').find(query);

while (await cursor.hasNext()) {
  const user = await cursor.next();
  console.log(user);
}
```