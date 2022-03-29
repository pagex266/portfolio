terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  default = "default"
  region  = "us-east-2"
}

resource "aws_lightsail_instance" "nodejs_terraform" {
  name              = "nodejs_terraform"
  availability_zone = "us-east-2a"
  blueprint_id      = "nodejs"
  bundle_id         = "micro_2_0"
  user_data         = "npm start -i"
}
