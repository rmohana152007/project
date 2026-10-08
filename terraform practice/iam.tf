resource "aws_iam_user" "demouser" {
  name = "sjcedemo"
  path = "/"

  tags = {
    tag-key = ""
  }
}