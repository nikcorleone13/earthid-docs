---
sidebar_position: 3
---

# Adding Permissions

## Add usage descriptions to application Info.plist

**Not adding these usage descriptions causes the system to kill applications when it requests the permissions when needed.**

EarthID iOS SDK requires camera, microphone, photo library and optionally NFC reader permissions for capturing photos, video and scanning passport during identification. Your application is responsible for describing the reason why camera, microphone, photo library and NFC reader is used. You must add 3 descriptions listed below to `Info.plist`  of your application with the explanation of the usage (info.plist is now accessible from the info tab in the root project directory).

- NSCameraUsageDescription
- NSMicrophoneUsageDescription
- NSPhotoLibraryUsageDescription


## Add required steps for NFC scanning

### 1. Add NFCReaderUsageDescription description to Info.plist
The application needs to define the list of application IDs or AIDs it can connect to, in the Info.plist file. The AID is a way of uniquely identifying an application on a ISO 7816 tag, which is usually defined by a standard.
```
<key>com.apple.developer.nfc.reader session.iso7816.select-identifiers</key>
<array>
  <string>A0000002471001</string>
  <string>A0000002472001</string>
  <string>00000000000000</string>
</array>
```

### 2. Add a new entitlement for NFC scanning
Add a new entitlement for NFC scanning, available since iOS 13. This new entitlement is added automatically by Xcode when enabling the Near Field Communication Tag Reading capability in the target Signing & Capabilities. After enabling the capability the *.entitlements file needs to contain the TAG format:
```
<key>com.apple.developer.nfc.readersession.formats</key>
<array>
    <string>NDEF</string>
    <string>TAG</string>
</array>
```

### 3. Starting verification flow
#### - Import EarthID in your code

```
// Swift
import earthIdSdk
```
 In order to use the EarthID SDK, please import it to your class that will use the SDK.

#### - Start the verification flow
In order to start the verification flow please call the method below with the defined parameters.
```
// Swift
earthIdSdk.start(sessionUrl: sessionUrl, presentingFrom: yourViewController)
```

Parameters are defined as below;

- `sessionUrl` : Required parameter. `sessionUrl` can be received from your backend implementation.     `sessionUrl` should be unique for each call. Check `/sessions` endpoint in the API documentation to learn how to generate one.

- `presentingFrom` : Your app's view controller from which our UI will be presented modally.

