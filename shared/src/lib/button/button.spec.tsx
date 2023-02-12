import { render } from '@testing-library/react';

import Button from './index';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button text='test' onClick={()=>{ alert("click"); }} />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.innerHTML).toContain("test");
  });
});
