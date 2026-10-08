#!/bin/bash

exec > >(tee /var/log/user-data.log | logger -t user-data -s 2>/dev/console) 2>&1

echo "Starting Docker installation..."

dnf update -y
dnf install -y docker

systemctl enable docker
systemctl start docker

usermod -aG docker ec2-user

echo "Docker installation completed."
docker --version