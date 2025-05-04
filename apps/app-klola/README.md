# Red Ant Colony ERP Application

This is the ERP application for Red Ant Colony, built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Technical Stack

- **Next.js** with App Router
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **pnpm** for package management
- **Docker** containerization

## 🐳 Docker Setup

This application uses a multi-stage Docker build process for optimal container size and security.

### Docker Build Process

The Dockerfile implements a multi-stage build with the following stages:

1. **Base**: Sets up Node.js and pnpm
2. **Dependencies**: Installs all required dependencies
3. **Builder**: Builds the Next.js application
4. **Runner**: Creates a minimal production image

### Building and Running with Docker

```bash
# Build the Docker image
docker build -t rac/erp -f apps/erp/Dockerfile .

# Run the container
docker run -p 3001:3000 rac/erp
```

### Using Docker Compose

The application can also be run using Docker Compose:

```bash
# Start the ERP application
docker-compose up erp

# Build and start the ERP application
docker-compose up --build erp
```

### Environment Variables

Create a `.env.production` file in the `apps/erp` directory with your production environment variables. This file will be mounted into the container at runtime.


## 🏁 Local Development

### Prerequisites

- **Node.js**: Version 18.x or higher
- **pnpm**: Version 9.x or higher
- **Docker**: For containerized deployment (optional)

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/red-ant-colony/web-monorepo.git
    cd web-monorepo
    ```

2. **Install Dependencies**:
    ```bash
    pnpm install
    ```

3. **Run Development Server**:
    ```bash
    # Run just the ERP application
    pnpm dev:erp
    ```

4. **Build for Production**:
    ```bash
    pnpm build:erp
    ```

## Health Check

The application includes a health check endpoint at `/api/health` that returns:

```json
{
  "status": "ok",
  "uptime": 123.45,
  "timestamp": "2023-04-10T12:34:56.789Z"
}
```

This endpoint is used by the Docker container's health check to ensure the application is running properly.
