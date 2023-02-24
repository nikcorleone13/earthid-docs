---
sidebar_position: 2
---
# Adding the Android SDK

Open the root `settings.gradle` file and add a new maven destination to the repositories in the allprojects section.
```
allprojects {
		repositories {
			maven { url 'https://tinyurl.com/earthidcdn' }
			maven { url 'https://jitpack.io' }

		}
	}
```
Add the EarthID SDK dependency to the application `build.gradle` file:
```
implementation 'com.github.earthidSDK:earthidSdkAndroid:v1.5
```
<!-- Permissions
The SDK will request all the permissions it needs, please make sure that the CAMERA, RECORD_AUDIO permissions are not explicitly removed using tools:node="remove" in your app`s manifest file. Ignore this if you are not explicitly removing any permissions. -->




<!-- Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-page'],
    },
  ],
}; -->

