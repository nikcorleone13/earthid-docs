---
sidebar_position: 8
---
# Getting the verification status

EarthID SDK sends callbacks to your mobile application. To capture the result override the `onActivityResult` method in your activity that started the verification flow:
```
@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    if (requestCode == REQUEST_CODE) {
        Result result = Result.fromResultIntent(data);
        if (result != null) {
            handleResult(result); //see below for handling the result
        }
    }
    super.onActivityResult(requestCode, resultCode, data);
}

public void handleResult(Result result) {
    switch (result.getStatus()) {
    case DONE:
        // Session is completed from user's perspective
        break;
    case CANCELED:
        // User cancelled the session
        break;
    case ERROR:
        // An error occurred during the flow, EarthID has already shown UI, no need to display
        // a separate error message here
        Log.w(TAG, "Verification error occurred: " + result.getError());
        break;
    }
}
```