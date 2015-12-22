# Cordova Plugin for Android to access intent (Android Only)

Developed to make it easier beeing a "send"-target on Android platform. 

**DONT USE IT NOW - DEVELOPMENT IN PROGRESS - VISIT In A FEW DAYS**

## Installation

Add the plugin to your project using Cordova CLI:

```bash
cordova plugin add https://github.com/napolitano/cordova-plugin-intent
```
Or using PhoneGap CLI:

```bash
phonegap local plugin add https://github.com/napolitano/cordova-plugin-intent
```

## Usage

```js
window.plugins.intent.setNewIntentHandler(function (intent) {
    // Do things
});
```

```js
window.plugins.intent.getCordovaIntent(function (intent) {}, function () {});
```


## Methods

### getCordovaIntent() - Android
Get limited access to intent properties

## Events

### setNewIntentHandler(method) - Android
Method passed will be triggered on new intent. Provides limited access to the new intent. 


### Supported Platforms

- Android


### Basic example: Send everything which was send to console.log to Answers

Will be added ASAP. Sorry for now. Please do "console.log(window.plugins.intent.getCordovaIntent()) to get a basic idea of the intent object
