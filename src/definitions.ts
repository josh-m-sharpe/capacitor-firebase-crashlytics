declare module "@capacitor/core" {
  interface PluginRegistry {
    FirebaseCrashlytics: FirebaseCrashlyticsPlugin;
  }
}

export interface FirebaseCrashlyticsPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
