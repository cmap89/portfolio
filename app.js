const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('under_construction');
});

app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
    console.log('listening on port 3000');
});