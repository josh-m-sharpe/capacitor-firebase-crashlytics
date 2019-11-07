import Foundation
import Capacitor

import Crashlytics

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(FirebaseCrashlytics)
public class FirebaseCrashlytics: CAPPlugin {

  @objc func crash(_ call: CAPPluginCall) {
    Crashlytics.sharedInstance().crash()
  }

  @objc func logUser(_ call: CAPPluginCall) {
    guard let email = call.getString("email") else {
      call.error("missing email property")
      return
    }
    guard let id = call.getString("id") else {
      call.error("missing id property")
      return
    }
    guard let name = call.getString("name")  else {
      call.error("missing name property")
      return
    }

    Crashlytics.sharedInstance().setUserEmail(email)
    Crashlytics.sharedInstance().setUserIdentifier(id)
    Crashlytics.sharedInstance().setUserName(name)

    call.success()
  }
}

