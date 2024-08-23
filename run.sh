#!/bin/bash

# Install Node.js
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Initialize a new Node.js project
npm init -y

# Install Express.js
npm install express

# Install Leaflet.js
npm install leaflet

# Start the server
node app.js