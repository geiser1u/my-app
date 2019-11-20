const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.json({ message: 'coucou' });
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.info('Server started.');
})
