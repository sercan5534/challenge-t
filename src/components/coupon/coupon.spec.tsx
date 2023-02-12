import { render } from '@testing-library/react';

import Coupon from '.';

describe('Coupon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Coupon />);
    expect(baseElement).toBeTruthy();
  });
});
