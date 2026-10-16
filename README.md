# Mythara Games

**Early Stage Startup - Gaming Platform**

Domain: mythara.games

## Overview

Mythara Games is an early stage startup building a next generation gaming platform that connects players with unique indie developed titles. This website showcases our platform and serves as the foundation for our AWS infrastructure deployment.

## Website Features

- Fully responsive static HTML CSS JavaScript design
- Smooth scroll animations and transitions
- Interactive navigation with parallax effects
- Early access program signup form
- AWS infrastructure documentation
- Mobile optimized layout

## AWS Services Used

This project leverages the following Amazon Web Services for scalable reliable hosting:

### Core Infrastructure

1. **Amazon S3** - Static website hosting with durable object storage
2. **Amazon CloudFront** - Global CDN for fast content delivery worldwide
3. **AWS Route 53** - DNS management for mythara.games domain
4. **AWS Certificate Manager** - Free SSL TLS certificates for HTTPS

### Backend Services (Future Expansion)

5. **AWS Lambda** - Serverless compute for API endpoints
6. **Amazon DynamoDB** - NoSQL database for user data and game metadata
7. **Amazon Cognito** - User authentication and authorization
8. **Amazon API Gateway** - RESTful API management
9. **AWS Amplify** - Front end web and mobile app development platform

## Deployment Guide for AWS Startup Credits Application

### Step 1: Create S3 Bucket

```bash
# Create bucket for static website hosting
aws s3 mb s3://mythara.games
```

### Step 2: Upload Website Files

```bash
# Sync all files to S3 bucket
aws s3 sync . s3://mythara.games --delete
```

### Step 3: Enable Static Website Hosting

```bash
# Configure bucket for website hosting
aws s3 website s3://mythara.games/ --index-document index.html --error-document index.html
```

### Step 4: Set Bucket Policy

Create a file named `bucket-policy.json`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::mythara.games/*"
        }
    ]
}
```

Apply the policy:

```bash
aws s3api put-bucket-policy --bucket mythara.games --policy file://bucket-policy.json
```

### Step 5: Create CloudFront Distribution

```bash
# Create CloudFront distribution pointing to S3 bucket
aws cloudfront create-distribution \
  --origin-domain-name mythara.games.s3.amazonaws.com \
  --default-root-object index.html
```

### Step 6: Configure Route 53

Create hosted zone for mythara.games and point it to your CloudFront distribution using an alias record.

### Step 7: Request SSL Certificate

Use AWS Certificate Manager to request a free certificate for mythara.games and attach it to your CloudFront distribution.

## Startup Credits Application Details

### Company Information

- **Company Name**: Mythara Games
- **Stage**: Early Stage Startup
- **Founded**: 2026
- **Domain**: mythara.games
- **Business Model**: Gaming platform with early access program

### Technical Architecture

Our platform uses a modern serverless architecture on AWS:

- **Frontend**: Static HTML CSS JavaScript hosted on S3
- **CDN**: CloudFront for global low latency delivery
- **DNS**: Route 53 for reliable domain resolution
- **Security**: ACM provided SSL TLS encryption
- **Backend**: Lambda functions for serverless compute
- **Database**: DynamoDB for scalable data storage
- **Authentication**: Cognito for secure user management

### Why AWS

We chose AWS because:

1. Industry leading reliability and uptime guarantees
2. Pay as you go pricing perfect for early stage startups
3. Global infrastructure reaches users worldwide
4. Comprehensive security and compliance tools
5. Scalable services grow with our user base
6. Extensive startup program benefits through AWS Activate

### Cost Optimization

- Static hosting eliminates server costs
- CloudFront caching reduces S3 requests
- Lambda only charges for actual compute time
- DynamoDB auto scaling matches demand
- Free tier eligible services minimize initial costs

## Project Structure

```
mythara/
├── index.html          # Main landing page
├── css/
│   └── styles.css      # All styles with animations
├── js/
│   └── main.js         # Interactive functionality
└── README.md           # This file
```

## Early Access Program

Join our exclusive early access program to:

- Experience cutting edge games before public release
- Provide direct feedback to developers
- Receive special perks and rewards
- Help shape the future of our platform

Contact us at contact@mythara.games to learn more.

## Development

To run locally:

```bash
# Simple HTTP server
python3 -m http.server 8000
```

Visit http://localhost:8000 in your browser.

## License

Copyright 2026 Mythara Games. All rights reserved.

## Contact

- Email: contact@mythara.games
- Domain: mythara.games
- Status: Early Stage Startup seeking AWS Activate credits# Mythara_frontend
