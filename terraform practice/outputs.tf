output "ec2_public_ip_1" {
  value = aws_instance.ec21.public_ip
}

output "ec2_public_ip_2" {
  value = aws_instance.ec2.public_ip
}
