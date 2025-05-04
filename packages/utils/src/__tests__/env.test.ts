import { getAppUrl, getEmailUrl, getWebsiteUrl } from '../envs';

describe('environment utils', () => {
    const originalEnv = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...originalEnv };
    });

    afterAll(() => {
        process.env = originalEnv;
    });

    describe('getAppUrl', () => {
        it('should return production URL when in production', () => {
            process.env.NODE_ENV = 'production';
            expect(getAppUrl()).toBe('https://redantcolony.com');
        });

        it('should return preview URL when in preview environment', () => {
            process.env.VERCEL_ENV = 'preview';
            process.env.VERCEL_URL = 'preview-url.vercel.app';
            expect(getAppUrl()).toBe('https://preview-url.vercel.app');
        });

        it('should return localhost URL in development', () => {
            process.env.NODE_ENV = 'development';
            expect(getAppUrl()).toBe('http://localhost:3001');
        });
    });

    describe('getEmailUrl', () => {
        it('should return localhost URL in development', () => {
            process.env.NODE_ENV = 'development';
            expect(getEmailUrl()).toBe('http://localhost:3000');
        });

        it('should return production URL when not in development', () => {
            process.env.NODE_ENV = 'production';
            expect(getEmailUrl()).toBe('https://redantcolony.com');
        });
    });

    describe('getWebsiteUrl', () => {
        it('should return production URL when in production', () => {
            process.env.NODE_ENV = 'production';
            expect(getWebsiteUrl()).toBe('https://redantcolony.com');
        });

        it('should return preview URL when in preview environment', () => {
            process.env.VERCEL_ENV = 'preview';
            process.env.VERCEL_URL = 'preview-url.vercel.app';
            expect(getWebsiteUrl()).toBe('https://preview-url.vercel.app');
        });

        it('should return localhost URL in development', () => {
            process.env.NODE_ENV = 'development';
            expect(getWebsiteUrl()).toBe('http://localhost:3000');
        });
    });
});