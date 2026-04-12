package com.emicalculator

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import io.invertase.firebase.config.ReactNativeFirebaseConfigPackage
import com.emicalculator.CrashPackage
import com.google.firebase.crashlytics.FirebaseCrashlytics

class MainApplication : Application(), ReactApplication {

  override val reactHost: ReactHost by lazy {
    getDefaultReactHost(
      context = applicationContext,
      packageList =
        PackageList(this).packages.apply {
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // add(MyReactNativePackage())
          add(ReactNativeFirebaseConfigPackage())
          add(CrashPackage())
        },
    )
  }

  override fun onCreate() {
    super.onCreate()
    loadReactNative(this)
    FirebaseCrashlytics.getInstance().setCrashlyticsCollectionEnabled(true)
  }
}
