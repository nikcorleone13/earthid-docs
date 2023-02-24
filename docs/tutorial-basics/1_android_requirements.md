---
sidebar_position: 1
---

# Android SDK Requirements

- EarthID Android SDK needs your `minSdkVersion` to be of 21 or above.
- Your project must have `Java 8` enabled and use AndroidX instead of older support libraries.
- The `android-gradle-plugin` version must be `4.0.0` or above.
- The `Proguard` version must be `6.2.2` or above. In case R8 is enabled no other updates are needed.
- The `kotlin-gradle-plugin` version must be `1.4.0` or above.

Please check the migration guides below if you need any guidance for updating these dependencies.


<!-- Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page). -->
