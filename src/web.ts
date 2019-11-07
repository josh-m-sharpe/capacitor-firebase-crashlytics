import { WebPlugin } from '@capacitor/core';
import { FirebaseCrashlyticsPlugin } from './definitions';

export class FirebaseCrashlyticsWeb extends WebPlugin implements FirebaseCrashlyticsPlugin {
  constructor() {
    super({
      name: 'FirebaseCrashlytics',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const FirebaseCrashlytics = new FirebaseCrashlyticsWeb();

export { FirebaseCrashlytics };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FirebaseCrashlytics);
