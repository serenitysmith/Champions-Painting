
const express = require('express');

const log = console.log;
const app = express();
const path = required('path');
const PORT = 8080;

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, () => log('Server is starting on PORT,', 8080));
// Configuring our data parsing
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());
app.post('/email', (req, res) => {
    //Send an email here but currently dummy email
    console.log('Data:', req.body);
    res.json({message: 'Message received!'})
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm.elements["name"].value;
        const email = contactForm.elements["email"].value;
        const message = contactForm.elements["message"].value;

        // You can use the form data to send an email using a server-side script or an API.
        // Here, we're just logging the data to the console.
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        
        
        contactForm.elements["name"].value = "";
        contactForm.elements["email"].value = "";
        contactForm.elements["message"].value = "";
        // You can also perform AJAX requests to send the form data to a server for processing.


const log = console.log;
const app = express();
const path = required('path');
const PORT = 8080;

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, () => log('Server is starting on PORT,', 8080));
// Configuring our data parsing
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());
app.post('/email', (req, res) => {
    //Send an email here but currently dummy email
    console.log('Data:', req.body);
    res.json({message: 'Message received!'})
});
    });
});
