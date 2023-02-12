import { OUTCOME_WRAPPER } from "./elements";
import { OutcomeItemProps } from "./interface";

export function OutcomeItem({ flag,event, selected, onClick }: OutcomeItemProps) {
  return (
    <OUTCOME_WRAPPER onClick={()=>onClick(event)} flag={flag} selected={selected}>{event.odd}</OUTCOME_WRAPPER>
  );
}

export default OutcomeItem;
