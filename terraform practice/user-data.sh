#!/bin/bash
exec > /var/log/user-data.log 2>&1
set -euxo pipefail

echo "Installing Docker..."
dnf install -y docker

echo "Starting Docker..."
systemctl enable --now docker

echo "Docker version:"
docker --version

echo "Docker installation completed."