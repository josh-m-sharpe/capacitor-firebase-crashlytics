Pod::Spec.new do |s|
  s.name = 'CapacitorFirebaseCrashlytics'
  s.version = '0.1.0'
  s.summary = 'Enable Firebase Crashlytics for Capacitor Apps'
  s.license = 'MIT'
  s.homepage = 'na'
  s.author = 'Josh Sharpe'
  s.source = { :git => 'https://github.com/josh-m-sharpe/capacitor-firebase-crashlytics.git', :tag => s.version.to_s }
  s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
  s.ios.deployment_target  = '11.0'
  s.dependency 'Capacitor'

  s.dependency 'Fabric'
  s.dependency 'Crashlytics'
  s.static_framework = true
end

