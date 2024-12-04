import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.goventure',
  appName: 'goventure',
  webDir: 'dist'
,
    android: {
       buildOptions: {
          keystorePath: 'c:\Users\Catarina\upload-keystore.jks',
          keystoreAlias: 'key0',
       }
    }
  };

export default config;
