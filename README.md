<h1 align="center">Welcome to IAC with CDK - code by Node.js 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D14.15.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.14.8-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> We will use Node.js and CDK to build AWS resources. The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Prerequisites

- node >=14.15.0
- npm >=6.14.8

## Build

```sh
npm run build
```

## Run tests

```sh
npm run test
```

## Steps by Steps

- (Optional) Build code to check error
```bash 
npm run build
```

- Login to AWS Account
```bash
aws sso login
```
OR
```bash
aws sso login --profile <profile_name>
```

- Deploy to AWS
```bash
cdk deploy
```
OR
```bash
cdk deploy --profile <profile_name>
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Author

👤 **Tran Minh**

* Website: www.vuilendi.com
* Github: [@vuilendi](https://github.com/vuilendi)
* LinkedIn: [@vuilendi](https://linkedin.com/in/vuilendi)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_