#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AwsRestApiStack } from "../lib/aws-rest-api-stack";

const app = new cdk.App();
const region = "us-east-1";
const account = "313002366985";
new AwsRestApiStack(app, "AwsRestApiStack", { env: { region, account } });
