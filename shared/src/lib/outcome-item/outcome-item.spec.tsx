import { render } from '@testing-library/react';

import OutcomeItem from '.';

describe('OutcomeItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OutcomeItem event={{
      id: 115,
      marketName: "Result",
      eventName: "Besiktas - Fenerbahce",
      odd: "3.12",
      outcomeName:"Draw",
      mbc: 2
    }} 
      onClick={() => { alert("click"); }}
    />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.innerHTML).toContain("3.12")
  });
});
