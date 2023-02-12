import { render } from '@testing-library/react';

import MatchList from '.';

describe('MatchList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MatchList />);
    expect(baseElement).toBeTruthy();
  });
});
