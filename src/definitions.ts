declare module "@capacitor/core" {
  interface PluginRegistry {
    FirebaseCrashlytics: FirebaseCrashlyticsPlugin;
  }
}

export type CrashlyticsUserOptions = {
  email: string;
  id: string;
  name: string;
};

export interface FirebaseCrashlyticsPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  crash(): Promise<void>;
  logUser(options: CrashlyticsUserOptions): Promise<void>;
}
