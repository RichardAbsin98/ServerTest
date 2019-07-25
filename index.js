const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hey from local file! I can write code here!');
});

app.listen(3000, () => console.log('Server running on port 3000'));