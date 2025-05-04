# @packages/utils

Shared utility functions for the web monorepo.

## Installation

```bash
pnpm add @packages/utils@workspace:*
```

## Usage

```typescript
import { formatDate, formatCurrency } from '@packages/utils';

const date = formatDate(new Date());
const price = formatCurrency(1000, 'IDR');
```

## Features

- Date formatting utilities
- Currency formatting
- String manipulation
- Type utilities
- Common hooks

## Development

```bash
# Run tests
pnpm test

# Build package
pnpm build
```

## Contributing

1. All utilities should be:
   - Type-safe
   - Well-tested
   - Well-documented
2. Follow the project's coding standards 