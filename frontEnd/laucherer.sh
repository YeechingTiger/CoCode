#!/bin/bash
fuser -k 3000/tcp

redis-server&
cd ./ojServer
npm install
nodemon server.js&
cd ../ojClient
npm install
ng build --watch&

echo "=================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY