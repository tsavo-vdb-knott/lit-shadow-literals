import {css} from 'lit-element';

import {
  smallShadowDarkTheme,
  smallShadowLightTheme,
  mediumShadowDarkTheme,
  mediumShadowLightTheme,
  largeShadowDarkTheme,
  largeShadowLightTheme,
  noShadow,
} from '../Literals';

export const SmallShadowClasses = css`
  .small-shadow,
  .small-shadow.lightTheme {
    ${smallShadowLightTheme}
  }

  .small-shadow.darkTheme {
    ${smallShadowDarkTheme}
  }
`;

export const MediumShadowClasses = css`
  .medium-shadow.darkTheme {
    ${mediumShadowDarkTheme}
  }

  .medium-shadow,
  .medium-shadow.lightTheme {
    ${mediumShadowLightTheme}
  }
`;

export const LargeShadowClasses = css`
  .large-shadow,
  .large-shadow.lightTheme {
    ${largeShadowLightTheme}
  }

  .large-shadow.darkTheme {
    ${largeShadowDarkTheme}
  }
`;

export const noShadowClass = css`
  .no-shadow {
    ${noShadow}
  }
`;
