resource "aws_instance" "ec21" {
  ami           = "ami-0d27e0fb3bac4d724"
  subnet_id = aws_subnet.pub-sub1.id
  vpc_security_group_ids = [aws_security_group.sg.id]
  instance_type = "t3.micro"
  key_name = "demo_key"


associate_public_ip_address = true
user_data = file("${path.module}/user-data.sh")
  tags = {
    Name = "demoinstance"
    team = "sjce-devops"
  }
}
resource "aws_security_group" "sg" {
  name        = "SG"
  description = "Allow TLS inbound traffic and all outbound traffic"
  vpc_id      = aws_vpc.trainvpc.id

  tags = {
    Name = "Security_ec2"
  }
}
resource "aws_vpc_security_group_ingress_rule" "sg1" {
  security_group_id = aws_security_group.sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 443
  ip_protocol       = "tcp"
  to_port           = 443
}
resource "aws_vpc_security_group_ingress_rule" "sg2" {
  security_group_id = aws_security_group.sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 22
  ip_protocol       = "tcp"
  to_port           = 22
}
resource "aws_vpc_security_group_ingress_rule" "sg3" {
  security_group_id = aws_security_group.sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 80
  ip_protocol       = "tcp"
  to_port           = 80
}
resource "aws_vpc_security_group_egress_rule" "sg_out" {
  security_group_id = aws_security_group.sg.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"
}




resource "aws_instance" "ec2" {
  ami           = "ami-0d27e0fb3bac4d724"
  subnet_id = aws_subnet.pub-sub2.id
  vpc_security_group_ids = [aws_security_group.sg.id]
  instance_type = "t3.micro"

  key_name = "demo_key"


associate_public_ip_address = true
user_data = file("${path.module}/user-data.sh")
  tags = {
    Name = "demoinstance"
    team = "sjce-devops"
  }
}
