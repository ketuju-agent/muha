# @packages/kv

Key-value storage utilities for the web monorepo.

## Installation

```bash
pnpm add @packages/kv@workspace:*
```

## Usage

```typescript
import { createStore } from '@packages/kv';

const store = createStore('app-store');
await store.set('user', { id: 1, name: 'John' });
const user = await store.get('user');
```

## Features

- Async storage operations
- Type-safe storage
- Multiple storage backends
- Caching utilities
- Persistence options

## Development

```bash
# Run tests
pnpm test

# Build package
pnpm build
```

## Configuration

Configure storage in your `.env`:

```env
STORAGE_BACKEND=redis
REDIS_URL=redis://localhost:6379
``` 