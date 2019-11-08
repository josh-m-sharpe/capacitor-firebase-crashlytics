# capacitor-firebase-crashlytics

Capacitor plugin for [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics/get-started).

```bash
npm install https://github.com/josh-m-sharpe/capacitor-firebase-crashlytics.git
npx cap update ios
```

## Known Issues / Contribution Ideas

1. `FirebaseCrashlytics.crash()` does not actually crash an Android app or submit anything to Crashlytics.  As such, I haven't figured out how to validate the Android use case. This is due to capacitor handling exceptions in plugins differently between Android and iOS.  On the Android side, all exceptions in plugin methods are caught. See codes [here](https://github.com/ionic-team/capacitor/blob/1.3.0/android/capacitor/src/main/java/com/getcapacitor/PluginHandle.java#L98-L102) and [here](https://github.com/ionic-team/capacitor/blob/1.3.0/android/capacitor/src/main/java/com/getcapacitor/Bridge.java#L531-L534).

2. The Android setup process (see below) seems a bit complicated for a plugin.  The app-side configuration that is required is somewhat redundant of what is configured within the plugin's `build.gradle` - see [here](https://github.com/josh-m-sharpe/capacitor-firebase-crashlytics/blob/master/android/build.gradle).  However, this is the simplest way to get `com.crashlytics.android.Crashlytics` loaded within the plugin that I was able to figure out. Pull Requests or suggestions to improve the situation are welcome.

## Usage

Load the module:
```typescript
import { Plugins } from '@capacitor/core';
const {
  FirebaseCrashlytics
} = Plugins;
```

Trigger a crash:
```typescript
FirebaseCrashlytics.crash();
```

Log a user:
```typescript
FirebaseCrashlytics.logUser({
 name: this.name,
 email: this.email,
 id: this.id
})
.then(() => alert(`user logged`))
.catch(err => alert(err.message));
```
## Android setup

1. Follow the [Firebase Crashlytics Get Started guide](https://firebase.google.com/docs/crashlytics/get-started?platform=android) and put your `google-services.json` here: `android/app/google-services.json`

2. Make the changes to your project level (`android/build.gradle`) and app level(`android/app/build.gradle`) files described in the Firebase Crashlytics docs [here](https://firebase.google.com/docs/crashlytics/get-started?platform=android).

3. Register the plugin in your Activity:

```diff
+ import com.jsharpe.capacitorfirebasecrashlytics.FirebaseCrashlytics;

  public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);

      // Initializes the Bridge
      this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        // Additional plugins you've installed go here
        // Ex: add(TotallyAwesomePlugin.class);
+       add(FirebaseCrashlytics.class);
      }});
    }
  }
```

## iOS setup

1. Open the [Firebase Crashlytics Get Started guide](https://firebase.google.com/docs/crashlytics/get-started?platform=ios)

2. Follow Step 1. Put your `GoogleService-Info.plist` here: `ios/App/App/GoogleService-Info.plist`

3. Skip Step 2. This plugin handles that for you.

4. Follow Step 3 to add a new run script phase.


