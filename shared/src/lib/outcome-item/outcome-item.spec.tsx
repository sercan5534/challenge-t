import { render } from '@testing-library/react';

import OutcomeItem from '.';

describe('OutcomeItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OutcomeItem event={{
      id: 115,
      marketName: "",
      eventName: "",
      odd: "3.12",
      mbc: 2
    }} />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.innerHTML).toBe("3.12")
  });
});
