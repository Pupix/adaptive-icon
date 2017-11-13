[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/pupix/adaptive-icon)

## &lt;adaptive-icon&gt;

`adaptive-icon` brings the new [Android Oreo adaptive icons](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive.html) ([MD docs](https://material.io/guidelines/style/icons.html#icons-icons-for-android)) directly into your browser.

Example:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="adaptive-icon.js"></script>

    <div id="container">
      <next-code-block></next-code-block>
    </div>
  </template>
</custom-element-demo>
```
-->
```html
<adaptive-icon>
    <img slot="background" src="images/background.svg" />
    <img slot="foreground" src="images/ic_launcher_foreground.svg" />
</adaptive-icon>

<adaptive-icon mask="circle">
    <img slot="background" src="images/background.svg" />
    <img slot="foreground" src="images/ic_launcher_foreground.svg" />
</adaptive-icon>

<adaptive-icon mask="square">
    <img slot="background" src="images/background.svg" />
    <img slot="foreground" src="images/ic_launcher_foreground.svg" />
</adaptive-icon>

<adaptive-icon mask="rounded-square">
    <img slot="background" src="images/background.svg" />
    <img slot="foreground" src="images/ic_launcher_foreground.svg" />
</adaptive-icon>

<adaptive-icon mask="squircle">
    <img slot="background" src="images/background.svg" />
    <img slot="foreground" src="images/ic_launcher_foreground.svg" />
</adaptive-icon>

<adaptive-icon mask="teardrop">
    <img slot="background" src="images/background.svg" />
    <img slot="foreground" src="images/ic_launcher_foreground.svg" />
</adaptive-icon>
```
