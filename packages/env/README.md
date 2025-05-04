# @packages/env

Environment configuration package for the web monorepo.

## Installation

```bash
pnpm add @packages/env@workspace:*
```

## Usage

```typescript
import { getEnvConfig } from '@packages/env';

const config = getEnvConfig();
console.log(config.apiUrl);
```

## Features

- Type-safe environment variables
- Environment validation
- Default values
- Environment-specific configurations

## Development

```bash
# Run tests
pnpm test

# Build package
pnpm build
```

## Configuration

Create a `.env` file based on `.env.example`:

```env
API_URL=https://api.example.com
NODE_ENV=development
``` 