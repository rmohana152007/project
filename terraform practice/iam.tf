resource "aws_iam_user" "demouser" {
  name = "sjcedemo2"
  path = "/"

  tags = {
     Name        = "sjcedemo2"
    Environment = "DevOps-Practice"
  }
}