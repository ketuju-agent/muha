import type { Notification } from '@/components/Notifications';
import { App } from '@apps';

import merge from 'deepmerge';
import { nanoid } from 'nanoid';
import yaml from 'yaml';

export interface Config {
    seo: {
        url: string;
        title: {
            default: string;
            suffix: string;
        };
        description: string;
        keywords: string;
        routes: {
            path: string;
            title: string;
            description?: string;
            id: string;
        }[];
    };
    pirsch?: {
        enabled?: boolean;
        code?: string;
    };
    user: {
        name: string;
        description?: string;
        avatar: string;
        password?: string;
        hint?: string;
    };
    translations?: {
        login?: string;
        notifications?: string;
    };
    notifications: Notification[];
    apps: App[];
}

export const defaultConfig: Config = {
    seo: {
        url: 'https://example.com',
        title: {
            default: 'Ketuju Digital Crafters',
            suffix: ' - Ketuju'
        },
        description: 'Digital Agency Based on South Borneo',
        keywords: 'portfolio,development,website,app',
        routes: []
    },
    user: {
        name: 'User',
        avatar: 'https://placekitten.com/200/200'
    },
    notifications: [],
    apps: []
};

let ids: string[] = [];

export async function readConfig(fs: typeof import('fs')) {
    const raw = fs.readFileSync('config.yml', 'utf8');
    const parsed = yaml.parse(raw);

    const config: Config = merge(defaultConfig, parsed);

    ids = [];
    config.apps = addIds(config.apps);

    return config;
}

function addIds(apps: App[]) {
    return apps.map((app) => {
        if (!app.id) {
            app.id = nanoid(8);

            if (ids.includes(app.id)) console.error(`Duplicate app id: ${app.id}`);
            ids.push(app.id);
        }

        if (app.type == 'folder') {
            if (!app.apps) {
                app.apps = [];
                return app;
            }

            app.apps = addIds(app.apps);
        }

        return app;
    });
}
