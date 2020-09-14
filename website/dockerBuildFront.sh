#!/bin/bash
echo Creating production build;
    npm run build;
echo ~ Starting to docker build frontend ~
    docker build -t jho44/personal-front .;
    docker push jho44/personal-front;
echo Done
