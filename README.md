# Shadow Style Literals and Classes for LitElements

##### \*\*Ported from https://tailwindcss.com/docs/shadows/, Configured for LitElement, LitHtml, and Constructable Style Sheets\*\*

## Usage With Classes

```js
import {LitElement, html} from 'lit-element';
import {SmallShadowClasses} from 'lit-shadow-literals';

class MyElement extends LitElement {
  static get styles() {
    return [SmallShadowClasses];
  }

  render() {
    return html`
      <div class="small-shadow"></div>
    `;
  }
}
```

## Usage With Literals

```js
import {LitElement, html, css} from 'lit-element';
import {
  smallShadowLightTheme,
  largeShadowDarkTheme,
  noShadow,
} from 'lit-shadow-literals';

class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        ${smallShadowLightTheme}
      }

      :host([darkMode]) {
        ${largeShadowDarkTheme}
      }

      div {
        ${noShadow}
      }
    `;
  }

  render() {
    return html`
      <div></div>
    `;
  }
}
```
