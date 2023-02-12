import { render } from '@testing-library/react';

import CouponItem from '.';

describe('CouponItem', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<CouponItem item={{
			id: 115,
			marketName: "Match Result",
			outcomeName: "Draw",
			eventName: "Besiktas - Fenerbahce",
			odd: "3.12",
			mbc: 2
		}}
			onRemove={() => { alert("remove"); }}

		/>);
		expect(baseElement).toBeTruthy();
		
	});
});
