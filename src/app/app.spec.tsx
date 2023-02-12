import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a switch theme button', () => {
    const { getByText } = render(<App />);
    expect(getByText(/KOYU TEMA'YI KULLAN/gi)).toBeTruthy();
  });
});
