const express = require('express');
const path = require('path');
const views = path.join(__dirname, '/views')
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(views, 'index.html')))
app.get('/marie-curie', (req, res) => res.sendFile(path.join(views, 'curie.html')))
app.get('/emilio-pettoruti', (req, res) => res.sendFile(path.join(views, 'pettoruti.html')))
app.get('/vincent-van-gogh', (req, res) => res.sendFile(path.join(views, 'gogh.html')))
app.get('/howard-philips-lovecraft', (req, res) => res.sendFile(path.join(views, 'lovecraft.html')))
app.get('/edgar-allan-poe', (req, res) => res.sendFile(path.join(views, 'poe.html')))
app.get('/aretha-franklin', (req, res) => res.sendFile(path.join(views, 'franklin.html')))

app.use(express.static('public'))

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
})