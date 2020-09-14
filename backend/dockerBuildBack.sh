#!/bin/bash

echo ~ Starting to docker build backend ~
    docker build -t jho44/personal-back .;
    docker push jho44/personal-back;
echo Done
