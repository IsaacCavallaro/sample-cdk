import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import {CdkAppStack} from '../lib/cdk-app-stack';

const app = new cdk.App();

new CdkAppStack(app, 'cdk-stack-dev', {
  stackName: 'cdk-stack-dev',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new CdkAppStack(app, 'cdk-stack-prod', {
  stackName: 'cdk-stack-prod',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});