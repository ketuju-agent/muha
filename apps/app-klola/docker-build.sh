#!/bin/bash

# Script to build and run the ERP Docker container
# Usage: ./docker-build.sh [build|run|all]

set -e

# Configuration
IMAGE_NAME="rac/erp"
IMAGE_TAG="latest"
CONTAINER_NAME="rac-erp"
CONTAINER_PORT=3000
HOST_PORT=3001

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Print header
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}       Red Ant Colony ERP Docker Build   ${NC}"
echo -e "${GREEN}=========================================${NC}"

# Function to build the Docker image
build_image() {
  echo -e "\n${YELLOW}Building Docker image: ${IMAGE_NAME}:${IMAGE_TAG}...${NC}"
  
  # Navigate to the monorepo root
  cd ../../
  
  # Build the Docker image
  docker build -t ${IMAGE_NAME}:${IMAGE_TAG} -f apps/erp/Dockerfile .
  
  echo -e "${GREEN}✓ Docker image built successfully!${NC}"
}

# Function to run the Docker container
run_container() {
  echo -e "\n${YELLOW}Running Docker container: ${CONTAINER_NAME}...${NC}"
  
  # Check if container already exists
  if [ "$(docker ps -a -q -f name=${CONTAINER_NAME})" ]; then
    echo -e "${YELLOW}Stopping and removing existing container...${NC}"
    docker stop ${CONTAINER_NAME} || true
    docker rm ${CONTAINER_NAME} || true
  fi
  
  # Run the Docker container
  docker run -d \
    --name ${CONTAINER_NAME} \
    -p ${HOST_PORT}:${CONTAINER_PORT} \
    -e NODE_ENV=production \
    -e PORT=${CONTAINER_PORT} \
    -e NEXT_TELEMETRY_DISABLED=1 \
    ${IMAGE_NAME}:${IMAGE_TAG}
  
  echo -e "${GREEN}✓ Docker container started successfully!${NC}"
  echo -e "${GREEN}✓ The ERP application is now running at: http://localhost:${HOST_PORT}${NC}"
}

# Parse arguments
case "$1" in
  build)
    build_image
    ;;
  run)
    run_container
    ;;
  all|"")
    build_image
    run_container
    ;;
  *)
    echo -e "${RED}Invalid option: $1${NC}"
    echo -e "Usage: $0 [build|run|all]"
    exit 1
    ;;
esac

echo -e "\n${GREEN}Done!${NC}"