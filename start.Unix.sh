#!/usr/bin/env bash
cd ./backend
#yarn ## Need to to install dependencies on first lunch
sudo rm -r ./clientbuild || true #remove previous build file
cd ../frontend
#yarn ## Need to to install dependencies on first lunch
npm run build
mv ./build ../backend/clientbuild
cd ../backend
npm start
