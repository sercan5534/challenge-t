import Coupon from "src/components/coupon";
import Footer from "src/components/footer/footer";
import MatchList from "src/components/match-list";
import ThemeChanger from "src/components/theme-changer/theme-changer";
import { useController } from "./controller";
import { CONTENT, WRAPPER } from "./elements";

export function App() {
	const {
		data: {
			theme, couponVisible
		},
		events: {
			onChangeTheme,
			onClickCouponButton
		}
	} = useController();

	return (
		<WRAPPER>
			<ThemeChanger theme={theme} onToggleTheme={onChangeTheme}></ThemeChanger>
			<CONTENT className={couponVisible ? "coupon-visible" : ""}>
				<MatchList />
				<Coupon />
			</CONTENT>
			<Footer onClickCouponButton={onClickCouponButton}></Footer>

		</WRAPPER>
	);
}

export default App;
