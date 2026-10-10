
#!/bin/bash
exec > /var/log/user-data.log 2>&1
set -euxo pipefail

echo "Updating packages..."
dnf update -y

echo "Installing Docker..."
dnf install -y docker

systemctl enable --now docker

echo "Checking Docker..."
docker --version

echo "Pulling portfolio image..."
docker pull ghcr.io/rmohana152007/portfolio:latest

echo "Starting portfolio container..."
docker rm -f portfolio || true

docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 80:80 \
  ghcr.io/rmohana152007/portfolio:latest

echo "Portfolio deployment completed."
docker ps -a
