package com.audioflashcardsv2;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // React-navigation

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AudioFlashcardsV2";
  }

  // React-navigation
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
