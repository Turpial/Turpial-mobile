#!/bin/bash
$ANDROID_SDK/platform-tools/adb install -r ./bin/TurpialActivity-debug.apk
$ANDROID_SDK/platform-tools/adb shell am start -n org.turpial.mobile/org.turpial.mobile.TurpialActivity
