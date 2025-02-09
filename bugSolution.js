```javascript
// Create an index for case-insensitive name search
db.collection('users').createIndex( { name: 'text' }, { caseSensitive: false } );

const query = { $text: { $search: "John" } };

const cursor = db.collection('users').find(query);

while (await cursor.hasNext()) {
  const user = await cursor.next();
  console.log(user);
}
```