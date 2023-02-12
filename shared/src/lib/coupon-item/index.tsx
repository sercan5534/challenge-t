import { useEffect, useState } from 'react';
import { COUPON_ITEM_WRAPPER, CROSS, INFO, MBC, ODD } from './elements';
import { CouponItemProps } from './interface';



export function CouponItem({ item, onRemove }: CouponItemProps) {
	const [newlyAdded, setNewlyAdded] = useState(true);

	useEffect(() => {
		setTimeout(()=> setNewlyAdded(false),2000);
	}, []);

	return (
		<COUPON_ITEM_WRAPPER added={newlyAdded}>
			<MBC mbc={item.mbc}>{item.mbc}</MBC>
			<INFO>
				<div className='title'>{item.marketName}</div>
				<div className='odd-name'>{item.outcomeName}</div>
				<div className='event-name'>{item.eventName}</div>
			</INFO>
			<ODD>{item.odd}</ODD>
			<CROSS onClick={()=>onRemove(item)}></CROSS>
		</COUPON_ITEM_WRAPPER>
	);
}

export default CouponItem;
