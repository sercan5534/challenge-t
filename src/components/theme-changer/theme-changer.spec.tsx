import { render } from '@testing-library/react';

import ThemeChanger from './theme-changer';

describe('ThemeChanger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeChanger />);
    expect(baseElement).toBeTruthy();
  });
});
