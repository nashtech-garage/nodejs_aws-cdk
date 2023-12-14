# Welcome to Node.js AWS CDK 👋
![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)

> Use AWS CDK with Node.js. The `cdk.json` file tells the CDK Toolkit how to execute your app.

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

* Github: [@vuilendi](https://github.com/vuilendi)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_