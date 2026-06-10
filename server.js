const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

const payments = [];

app.post('/api/payment', (req, res) => {
    const payment = {
        id: Date.now(),
        amount: req.body.amount,
        status: 'SUCCESS'
    };

    payments.push(payment);

    res.json(payment);
});

app.get('/api/payments', (req, res) => {
    res.json(payments);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});