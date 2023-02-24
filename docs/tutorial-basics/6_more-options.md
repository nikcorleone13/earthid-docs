---
sidebar_position: 6
---

# More customization options

### Customizing primary button background color
You can customize the background color of the primary button in the SDK by passing a color value to the `primaryButtonBackgroundColor` method to the Branding builder. Note that this value is expected to be a `@ColorInt` representation of color. In case the custom button background color is not specified the SDK will use `themeColor`. If `themeColor` is not specified SDK will use default color instead.
```
Branding branding = new Branding.Builder()
        .primaryButtonBackgroundColor(getResources().getColor(R.color.your_custom_button_background_color))
        .build();
```
### Custom intro screen
EarthID supports replacement of the introduction screen with a custom client developed introduction screen for eligible clients. First, please ask about this possibility from your account manager. In case we can offer it for you then removal process is following:
- You agree on your own introduction screen visuals and copy with our account manager and get relevant legal documents signed in case they are needed.
- After that EarthID will enable a custom introduction screen from the backend for your integrations.
- After you have implemented your own introduction screen you can change the configuration option specified below.
```
Configuration configuration = new Configuration.Builder()
        .customIntroScreen(true)
        .build();
```
***Note***: Adding the configuration alone in your app is not enough to enable the custom intro screen. Make sure to contact your account manager so they can enable the feature for your integration.

### Setting a locale for the SDK (Optional)
You can set a locale(`java.util.Locale`) for the SDK from the app itself.
```
Locale appLocale = Locale.ENGLISH;
Configuration configuration = new Configuration.Builder()
        .locale(appLocale)
        .build();

Intent intent = Sdk.createLaunchIntent(activity, sessionUrl, configuration);
startActivityForResult(intent, REQUEST_CODE);        
```






