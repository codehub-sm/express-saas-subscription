const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simple mock database
const subscriptions = [];

// Create a new subscription
app.post('/subscriptions', (req, res) => {
    const { name, plan, expiry } = req.body;
    const subscription = { id: subscriptions.length + 1, name, plan, expiry };
    subscriptions.push(subscription);
    res.json(subscription);
});

// List all subscriptions
app.get('/subscriptions', (req, res) => res.json(subscriptions));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() { console.log(`App listening on port ${PORT}`)});