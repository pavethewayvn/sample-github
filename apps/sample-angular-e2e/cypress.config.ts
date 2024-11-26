import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  // e2e: {
  //   ...nxE2EPreset(__filename, {
  //     cypressDir: 'src',
  //     webServerCommands: {
  //       default: 'npx nx run sample-angular:serve',
  //       production: 'npx nx run sample-angular:serve-static',
  //     },
  //     ciWebServerCommand: 'npx nx run sample-angular:serve-static',
  //     // ciBaseUrl: 'http://localhost:4200',
  //   }),
  //   // baseUrl: 'http://localhost:4200',
  // },
  e2e: {
    ...nxE2EPreset(__filename, {
      webServerCommands: {
        default: 'npx nx run sample-angular:serve',
      },
      ciWebServerCommand: 'npx nx run sample-angular:serve',
      webServerConfig: {
        timeout: 30000,
      },
    }),
    baseUrl: 'http://localhost:4200',
  }
});

