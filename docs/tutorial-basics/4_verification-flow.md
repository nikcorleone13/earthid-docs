---
sidebar_position: 4
---

# Starting the verification flow

The verification flow must be launched from the vendor Activity class with a unique session. A session is valid for 7 days and expires automatically after that.
```
import com.example.earthidlibservice.EarthidSdk

EarthidSdk earthIdSdk =new EarthidSdk()
Intent intent = earthIdSdk.createSdk(activity,sessionUrl)
startActivityForResult(intent, REQUEST_CODE);
```
Parameters are defined as below;

- `sessionUrl` : Required parameter. `sessionUrl` can be received from your backend implementation. `sessionUrl` should be unique for each call. Check `/sessions` endpoint in the API documentation to learn how to generate one.

- `REQUEST_CODE` : Define an integer constant `REQUEST_CODE` in your activity which can be used to compare in `onActivityResult`


