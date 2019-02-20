import {css} from 'lit-element';

export const smallShadowLightTheme = css`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export const mediumShadowLightTheme = css`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`;

export const largeShadowLightTheme = css`
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
`;

export const noShadow = css`
  box-shadow: none;
`;

export const smallShadowDarkTheme = css`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 6px 6px rgba(0, 0, 0, 0.25);
`;

export const mediumShadowDarkTheme = css`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.5);
`;

export const largeShadowDarkTheme = css`
  box-shadow: 0 19px 38px rgba(0,0,0,0.5), 0 15px 12px rgba(0,0,0, 0.5);
}
`;
