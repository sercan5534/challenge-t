import Button from "shared/src/lib/button";
import { WRAPPER } from './element';
import { FooterProps } from './interface';


export function Footer({
  onClickCouponButton
}: FooterProps) {
  return (
    <WRAPPER className='footer'>
      <Button size="small" text='COUPON' onClick={onClickCouponButton}></Button>
    </WRAPPER>
  );
}

export default Footer;
