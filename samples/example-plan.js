// Example plan for the "Load Example" button. Loaded on demand as a script (not fetched) so it works from file://.
window.EXAMPLE_PLAN = String.raw`Terraform will perform the following actions:

  # aws_cloudwatch_log_group.example-api-logs_1A2B3C4D will be destroyed
  # (because aws_cloudwatch_log_group.example-api-logs_1A2B3C4D is not in configuration)
  - resource "aws_cloudwatch_log_group" "example-api-logs_1A2B3C4D" {
      - name              = "/ecs/example-api" -> null
      - retention_in_days = 365 -> null
    }

  # aws_db_instance.example-reporting-db_5E6F7A8B will be destroyed
  - resource "aws_db_instance" "example-reporting-db_5E6F7A8B" {
      - engine            = "postgres" -> null
      - identifier        = "acme-example-reporting" -> null
      - storage_encrypted = true -> null
    }

  # aws_ecs_task_definition.example-api-task-definition_9C0D1E2F must be replaced
-/+ resource "aws_ecs_task_definition" "example-api-task-definition_9C0D1E2F" {
      ~ arn                   = "arn:aws:ecs:us-east-1:000000000000:task-definition/example-api:41" -> (known after apply)
      ~ container_definitions = jsonencode(
          ~ [
              ~ {
                  ~ image = "example-api-ecr:1a2b3c4d" -> "example-api-ecr:5e6f7a8b"
                    name  = "api"
                    # (11 unchanged attributes hidden)
                },
            ]
        ) # forces replacement
      ~ revision              = 41 -> (known after apply)
        # (9 unchanged attributes hidden)
    }

  # aws_lambda_function.example-worker_3A4B5C6D will be updated in-place
  ~ resource "aws_lambda_function" "example-worker_3A4B5C6D" {
        id          = "acme-example-worker"
      ~ memory_size = 512 -> 1024
      ~ timeout     = 30 -> 60
        # (27 unchanged attributes hidden)
    }

  # aws_sns_topic_subscription.example-alerts_7E8F9A0B will be created
  + resource "aws_sns_topic_subscription" "example-alerts_7E8F9A0B" {
      + arn       = (known after apply)
      + endpoint  = "arn:aws:sqs:us-east-1:000000000000:acme-example-alerts"
      + protocol  = "sqs"
      + policy    = jsonencode(
          + { Statement = [ { Effect = "Allow" } ] }
        )
    }

Plan: 2 to add, 1 to change, 3 to destroy.`;
