# @packages/analytics

Analytics integration package for the web monorepo.

## Installation

```bash
pnpm add @packages/analytics@workspace:*
```

## Usage

```typescript
import { initAnalytics, trackEvent } from '@packages/analytics';

// Initialize analytics
initAnalytics({
  googleAnalyticsId: 'UA-XXXXX-Y',
});

// Track events
trackEvent('button_click', {
  buttonId: 'submit',
  page: 'checkout',
});
```

## Features

- Google Analytics integration
- Event tracking
- Page view tracking
- User identification
- Custom event properties

## Development

```bash
# Run tests
pnpm test

# Build package
pnpm build
```

## Configuration

Create a `.env` file with your analytics configuration:

```env
NEXT_PUBLIC_GA_ID=UA-XXXXX-Y
``` 