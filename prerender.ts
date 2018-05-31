// Load zone.js for the server.
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { join, resolve } from 'path';
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

import { enableProdMode } from '@angular/core';

// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { renderModuleFactory } from '@angular/platform-server';

import * as fs from 'fs-extra';

// Add routes manually that you need rendered
const ROUTES = [
    '/',
    '/fruits',
    '/contact',
    '/authentication',
    '/some/deep/route'
];

const APP_NAME = 'Angular-Universal-Prerendering';

// leave this as require(), imported via webpack
const {
    AppServerModuleNgFactory,
    LAZY_MODULE_MAP
} = require(`./dist/${APP_NAME}-server/main`);

enableProdMode();

async function prerender() {

    // Get the app index
    const browserBuild = `dist/${APP_NAME}`;
    const index = await fs.readFile(join(browserBuild, 'index.html'), 'utf8');

    // Loop over each route
    for (const route of ROUTES) {
        const pageDir = join(browserBuild, route);
        await fs.ensureDir(pageDir);

        // Render with Universal
        const html = await renderModuleFactory(AppServerModuleNgFactory, {
            document: index,
            url: route,
            extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
        });

        await fs.writeFile(join(pageDir, 'index.html'), html);
    }

    console.log('Rendering Finished!');
    process.exit();
}

prerender();
