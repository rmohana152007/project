#!/bin/bash
exec > /var/log/user-data.log 2>&1
set -euxo pipefail

dnf install -y docker
systemctl enable --now docker
docker --version