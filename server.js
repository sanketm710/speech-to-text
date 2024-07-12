const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Start the HTTPS server
const httpsOptions = {
  key: fs.readFileSync("certificate key file /etc/ssl/private/server.key"),
  cert: fs.readFileSync("certificate file /etc/ssl/certs/server.crt"),
};

const PORT = process.env.PORT || 443;

https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
