import { useController } from './controller';
import { COUPON_FOOTER, COUPON_WRAPPER, LIST, NO_ITEM, PRE_STAKE, STAKE, TITLE, STAKE_INPUT, BUTTON_WRAPPER, SUMMARY } from './elements';
import { CouponProps } from './interface';
import CouponItem from "shared/src/lib/coupon-item";
import Button from 'shared/src/lib/button';

export function Coupon(props: CouponProps) {
	const {
		data:{
			coupon, stake, totalOdds, possibleWin, minMbc
		},
		events:{
			onRemoveCouponItem,
			clearCoupon,
			onChangeStake,
			onBlurStake,
			placeBet
		}
	} = useController();
	return (
		<COUPON_WRAPPER className='coupon'>
			<TITLE>{coupon && <span className='count'>{coupon.length}</span>} MAÇ</TITLE>
			<LIST>
				{
					coupon && coupon.length > 0 ? coupon.map((i,index)=><CouponItem key={`coupon-item-${index}`}
						item={i}
						onRemove={() => onRemoveCouponItem(i)}
					></CouponItem>) : <NO_ITEM>Kuponunuzda hic mac yok</NO_ITEM>
				}
			</LIST>
			<COUPON_FOOTER>
				<STAKE>
					<div className="title">MISLI</div>
					<div className="prestakes">
						<PRE_STAKE onClick={()=>onChangeStake(5)} selected={stake === 5}>5</PRE_STAKE>
						<PRE_STAKE onClick={() => onChangeStake(10)} selected={stake === 10}>10</PRE_STAKE>
						<PRE_STAKE onClick={() => onChangeStake(15)} selected={stake === 15}>15</PRE_STAKE>
						<PRE_STAKE onClick={() => onChangeStake(20)} selected={stake === 20}>20</PRE_STAKE>
						<PRE_STAKE onClick={() => onChangeStake(50)} selected={stake === 50}>50</PRE_STAKE>
					</div>
					<STAKE_INPUT type="number" value={stake} onChange={(e) => onChangeStake(parseInt(e.target.value))} onBlur={onBlurStake}/>
				</STAKE>
				<SUMMARY>
					<div>
						<div className='label'>Toplam Oran</div>
						<div className='value'>{totalOdds}</div>
					</div>
					<div>
						<div className='label'>Toptal Tutar</div>
						<div className='value'>{stake} &#8378;</div>
					</div>
					<div>
						<div className='label'>Maksimum Kazanç</div>
						<div className='value'>{possibleWin} &#8378;</div>
					</div>
				</SUMMARY>
				{
					coupon &&
					<BUTTON_WRAPPER>
						<Button text='CLEAR' onClick={clearCoupon}></Button>
						<Button disabled={minMbc > coupon.length} text='HEMEN OYNA' onClick={placeBet}></Button>
					</BUTTON_WRAPPER>
				}
			</COUPON_FOOTER>
		</COUPON_WRAPPER>
	);
}

export default Coupon;
