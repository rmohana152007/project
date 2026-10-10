#!/bin/bash
exec > /var/log/user-data.log 2>&1
set -euxo pipefail

dnf update -y
dnf install -y docker
systemctl enable --now docker
usermod -aG docker ec2-user

docker --version