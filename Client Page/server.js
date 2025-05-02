const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Sample in-memory data storage (replace this with a database)
let clients = [];
let licenses = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to handle user registration
app.post('/register', (req, res) => {
    const { name, address, email, username, password } = req.body;
    // Validate input and add user to the database
    clients.push({ name, address, email, username, password });
    res.send('Registration successful');
});

// Endpoint to handle license association
app.post('/associateLicense', (req, res) => {
    const { serialNumber, purchaseDate, expiryDate, softwareName } = req.body;
    // Validate input and associate the license with the user
    licenses.push({ serialNumber, purchaseDate, expiryDate, softwareName });
    res.send('License associated successfully');
});

// Endpoint to get a list of associated licenses for a user
app.get('/getLicenses/:username', (req, res) => {
    const { username } = req.params;
    // Retrieve and return associated licenses for the specified user
    const userLicenses = licenses.filter((license) => license.username === username);
    res.json(userLicenses);
});

// Endpoint to acquire a new license
app.post('/acquireLicense', (req, res) => {
    const { newSerialNumber } = req.body;
    // Validate input and acquire the new license
    licenses.push({ serialNumber: newSerialNumber });
    res.send('License acquired successfully');
});

// Endpoint to renew or stop renewing a license
app.post('/renewLicense', (req, res) => {
    const { renewSerialNumber } = req.body;
    // Validate input and renew or stop renewing the license
    res.send('License renewed or stopped renewing successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
