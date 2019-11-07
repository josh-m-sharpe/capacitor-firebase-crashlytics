import { WebPlugin } from '@capacitor/core';
import { FirebaseCrashlyticsPlugin, CrashlyticsUserOptions } from './definitions';

export class FirebaseCrashlyticsWeb extends WebPlugin implements FirebaseCrashlyticsPlugin {
  constructor() {
    super({
      name: 'FirebaseCrashlytics',
      platforms: ['web']
    });
  }

  async crash(): Promise<void> {
    console.warn("Crashlytics.crash is not implemented on web");
  }

  async logUser(options: CrashlyticsUserOptions): Promise<void> {
    console.warn("Crashlytics.logUser is not implemented on web");
    console.log(options);
  }
}

const FirebaseCrashlytics = new FirebaseCrashlyticsWeb();

export { FirebaseCrashlytics };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FirebaseCrashlytics);
