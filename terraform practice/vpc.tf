#vpc
resource "aws_vpc" "trainvpc" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "default"

  tags = {
    Name = "vpctf"
  }
}


#private sub
resource "aws_subnet" "pri_sub" {
  vpc_id     = aws_vpc.trainvpc.id
  cidr_block = "10.0.1.0/24"

  tags = {
    Name = "pri_subtf"
  }
}


#public sub
resource "aws_subnet" "pub_sub" {
  vpc_id     = aws_vpc.trainvpc.id
  cidr_block = "10.0.2.0/24"

  tags = {
    Name = "pub_subtf"
  }
}


#gateway
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.trainvpc.id

  tags = {
    Name = "igwtf"
  }
}


#route table
resource "aws_route_table" "demo_rt" {
  vpc_id = aws_vpc.trainvpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

 
  tags = {
    Name = "routetf"
  }
}

#associate to pub-sub
resource "aws_route_table_association" "associatert" {
  subnet_id      = aws_subnet.pub_sub.id
  route_table_id = aws_route_table.demo_rt.id
}

#security group


resource "aws_security_group" "securitygrouptf" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic and all outbound traffic"
  vpc_id      = aws_vpc.trainvpc.id

  tags = {
    Name = "sgtf"
  }
}

resource "aws_vpc_security_group_ingress_rule" "https" {
  security_group_id = aws_security_group.securitygrouptf.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 443
  ip_protocol       = "tcp"
  to_port           = 443
}

resource "aws_vpc_security_group_ingress_rule" "http" {
  security_group_id = aws_security_group.securitygrouptf.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 80
  ip_protocol       = "tcp"
  to_port           = 80
}

resource "aws_vpc_security_group_ingress_rule" "ssh" {
  security_group_id = aws_security_group.securitygrouptf.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 22
  ip_protocol       = "tcp"
  to_port           = 22
}
