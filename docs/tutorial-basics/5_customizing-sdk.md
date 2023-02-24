---
sidebar_position: 5
---

# Customizing the SDK

## Setting a theme (Optional)
You can customize the look and feel of the SDK flow by passing a Branding object via `Configuration` to `createLaunchIntent` as shown in the example below.
```
Branding branding = new Branding.Builder()
        .themeColor(getResources().getColor(R.color.theme_color))
        .backgroundColor(getResources().getColor(R.color.background_color))
        .primaryTextColor(getResources().getColor(R.color.primary_text_color))
        .secondaryTextColor(getResources().getColor(R.color.secondary_text_color))
        .toolbarIcon(R.drawable.toolbar_icon)
        .logomark(R.srawable.logomark)
        .bulletPoint(R.drawable.bullet_point)
        .buttonCornerRadius(48f)
        .notificationIcon(R.drawable.notification_icon)
        .build();

Configuration configuration = new Configuration.Builder()
        .branding(branding)
        .build();


Intent intent = Sdk.createLaunchIntent(activity, sessionUrl, configuration);
startActivityForResult(intent, REQUEST_CODE);
```

All custom values for branding are optional. If a value is not provided for them the default EarthID color or icon will be used.