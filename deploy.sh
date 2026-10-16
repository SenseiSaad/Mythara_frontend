#!/bin/bash

# Mythara Games - AWS Deployment Script
# This script automates the deployment of mythara.games to AWS S3 and CloudFront

set -e

# Configuration
BUCKET_NAME="mythara.games"
REGION="us-east-1"

echo "=========================================="
echo "  Mythara Games - AWS Deployment Script"
echo "=========================================="
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "Error: AWS CLI is not installed."
    echo "Please install it from: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo "Error: AWS credentials are not configured."
    echo "Please run 'aws configure' first."
    exit 1
fi

echo "Step 1: Creating S3 bucket..."
aws s3 mb s3://$BUCKET_NAME --region $REGION 2>/dev/null || echo "Bucket already exists or creation skipped."

echo ""
echo "Step 2: Uploading website files..."
aws s3 sync . s3://$BUCKET_NAME --delete --exclude "deploy.sh" --exclude ".git/*"

echo ""
echo "Step 3: Enabling static website hosting..."
aws s3 website s3://$BUCKET_NAME/ --index-document index.html --error-document index.html

echo ""
echo "Step 4: Setting bucket policy for public read access..."
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json

echo ""
echo "Step 5: Configuring CORS (if needed)..."
echo "CORS configuration can be added later if required."

echo ""
echo "=========================================="
echo "  Deployment Complete!"
echo "=========================================="
echo ""
echo "Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo ""
echo "Next Steps:"
echo "1. Create a CloudFront distribution for HTTPS and global CDN"
echo "2. Configure Route 53 to point mythara.games to CloudFront"
echo "3. Request an SSL certificate via AWS Certificate Manager"
echo ""
echo "For AWS Activate startup credits, include this architecture in your application."