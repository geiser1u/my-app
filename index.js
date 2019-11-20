const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'coucou' });
})

app.listen(80, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.info('Server started.');
})
