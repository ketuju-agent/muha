import { DEFAULT_SERVER_ERROR_MESSAGE, createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

export const actionClient = createSafeActionClient({
    handleServerError(e) {
        if (e instanceof Error) {
            return e.message;
        }

        return DEFAULT_SERVER_ERROR_MESSAGE;
    }
});

export const actionClientWithMeta = createSafeActionClient({
    handleServerError(e) {
        if (e instanceof Error) {
            return e.message;
        }

        return DEFAULT_SERVER_ERROR_MESSAGE;
    },
    defineMetadataSchema() {
        return z.object({
            name: z.string(),
            track: z
                .object({
                    event: z.string(),
                    channel: z.string()
                })
                .optional()
        });
    }
});
