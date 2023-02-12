import { render } from '@testing-library/react';

import CouponItem from '.';

describe('CouponItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CouponItem />);
    expect(baseElement).toBeTruthy();
  });
});
