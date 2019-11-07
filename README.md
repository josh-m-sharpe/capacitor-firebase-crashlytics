# capacitor-firebase-crashlytics

Capacitor plugin for [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics/get-started).

```bash
npm install capacitor-firebase-crashlytics
npx cap update ios
```

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

1. Follow the Firebase Get Started guide and put your `google-services.json` here: `android/app/google-services.json`

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

1. Open the [Firebase Crashlytics get started guide](https://firebase.google.com/docs/crashlytics/get-started?platform=ios)

2. Follow Step 1.  Put your `GoogleService-Info.plist` here: `ios/App/App/GoogleService-Info.plist`

3. Skip Step 2 - this plugin handles that for you.

4. Follow Step 3 to add a new run script phase.


