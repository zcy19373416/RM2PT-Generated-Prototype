#!/bin/bash
npm install
npm run build
docker stop vue-builder
docker rm vue-builder
docker rmi vue-builder
docker build -t vue-builder .
docker run -p 9090:9090 --name vue-builder -d vue-builder