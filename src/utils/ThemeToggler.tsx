/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import styled from 'styled-components';

type Theme = 'light' | 'dark';

const useThemeToggler = (): { setTheme: (theme: Theme) => void; nextTheme: Theme } => {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return { setTheme, nextTheme };
};

export const ThemeToggler = (): JSX.Element => {
  const { setTheme, nextTheme } = useThemeToggler();
  return (
    <ThemeTogglerLabel htmlFor="themeToggler">
      <ThemeTogglerInput
        type="checkbox"
        id="themeToggler"
        name="theme-toggler"
        onChange={() => setTheme(nextTheme)}
      />
      <ThemeSlider />
    </ThemeTogglerLabel>
  );
};

const ThemeTogglerLabel = styled.label`
  position: relative;
  display: inline-block;

  width: 3.8rem;
  height: 2rem;
`;

const ThemeTogglerInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background: var(--black);
  }

  &:not(:checked):active + span::before {
    width: 2.4rem;
  }

  &:checked:active + span::before {
    transform: translate(1rem, -50%);
    width: 2.4rem;
  }

  &:checked + span::before {
    transform: translate(1.8rem, -50%);
  }
`;

const ThemeSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: var(--black);
  border-radius: 1rem;

  transition: background 0.2s;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: 0.2rem;
    top: 50%;
    transform: translateY(-50%);

    height: 1.6rem;
    width: 1.6rem;
    border-radius: 1.6rem;

    background: var(--white);
    transition: transform 0.2s, width 0.2s, background 0.2s;
  }
`;
