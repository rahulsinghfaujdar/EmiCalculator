package com.emicalculator

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CrashModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String = "CrashModule"

  @ReactMethod
  fun triggerCrash() {
    throw RuntimeException("Test Crash from React Native 🚀")
  }
}