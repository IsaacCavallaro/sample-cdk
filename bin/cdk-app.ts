import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import {CdkAppStack} from '../lib/cdk-app-stack';

const app = new cdk.App();

new CdkAppStack(app, 'CdkAppStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
