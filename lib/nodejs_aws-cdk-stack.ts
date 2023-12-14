import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_ec2 as ec2, aws_iam as iam } from 'aws-cdk-lib';

export class NodejsAwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create VPC
    //VPC
    const vpc = new ec2.Vpc(this, 'confidential_computing_vpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16') ,
      subnetConfiguration: [
        {
          name: 'subnet_public', 
          subnetType: ec2.SubnetType.PUBLIC, 
          cidrMask: 24
       }
      ]
    });

    // Security Group
    const security_group = new ec2.SecurityGroup(this, 'confidential_computing_sg', {
      vpc,
      allowAllOutbound: true
    });

    security_group.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(22),
      'Allow SSH from any where'
    );

    security_group.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(80),
      'Allow HTTP Traffic from any where'
    );

    security_group.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(443),
      'Allow HTTPS Traffic from any where'
    );

    // Role
    const web_server_role = new iam.Role(this, 'ec2_basic_role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      roleName: 'ec2_basic_role'
    });

    const ec2_instance = new ec2.Instance(this, 'tiny_ec2', {
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      role: web_server_role,
      securityGroup: security_group,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T2,
        ec2.InstanceSize.MICRO,
      ),
      machineImage: new ec2.AmazonLinuxImage({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
      // Should input your ec2 key here
      keyName: 'confidential-ec2-key-pair',
    });

  }
}
