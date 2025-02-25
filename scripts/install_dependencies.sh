#!/bin/bash
sudo yum -y update
sudo yum -y install ruby wget python-pip
cd /home/ec2-user
wget https://aws-codedeploy-eu-central-1.s3.eu-central-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo pip install awscli