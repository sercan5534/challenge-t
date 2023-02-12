import { BUTTON_WRAPPER } from './elements';
import { ButtonProps } from './interface';

export function Button({ text, onClick,...rest }: ButtonProps) {
	return (
		<BUTTON_WRAPPER {...rest} onClick={onClick}>
			{text}
		</BUTTON_WRAPPER>
	);
}

export default Button;
