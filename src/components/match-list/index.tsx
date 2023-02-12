import { useController } from "./controller";
import { EVENT_ITEM, MATCH_LIST_WRAPPER, OUTCOME_WRAPPER, TITLE_ROW } from "./elements";
import { events } from "./events";
import { MatchListProps } from "./interface";
import OutcomeItem from "shared/src/lib/outcome-item";
import { IResultMarket } from "shared/src/types/IResultMarket";

export function MatchList(props: MatchListProps) {
	const {
		events: {
			getEventParsedInfo,
			getOutcomeParsedInfo,
			onSelectOdd,
			getMarketName,
			isSelected,
			sortOutcomes
		}
	} = useController();

	return (
		<MATCH_LIST_WRAPPER>
			<TITLE_ROW>
				<div className="name">INGILTERE - PREMIER LIG</div>
				<div className="outcomes">
					<span className="outcome">MS 1</span>
					<span className="outcome">MS X</span>
					<span className="outcome">MS 2</span>
					<span className="outcome">2.5 UST</span>
					<span className="outcome">2.5 ALT</span>
				</div>
			</TITLE_ROW>
			{
				events.map((event, index) => {
					const [home, away] = getEventParsedInfo(event.eventName);
					return <EVENT_ITEM key={`event-list-item-${index}`} mbc={event.mbc}>
						<div className="info">
							<span className="mbc">{event.mbc}</span>
							<div className="home">{home}</div>
							<div className="away">{away}</div>
						</div>
						<div className="outcomes">
							{
								Object.keys(event.matchResultOdds).sort(sortOutcomes).map(i => {
									const outcomeId = parseInt(i);
									const outcome = event.matchResultOdds[outcomeId as keyof IResultMarket];
									const [marketName, outcomeName] = getOutcomeParsedInfo(outcome.name);
									const selected = isSelected(event.eventName,outcomeId);
									return <OUTCOME_WRAPPER key={`${index}-${outcomeId}`
									} >
										<div className="name">{getMarketName(outcomeId)}</div>
										<OutcomeItem event={{
											id: outcomeId,
											marketName: marketName,
											eventName: event.eventName,
											outcomeName: outcomeName,
											odd: outcome.outCome,
											mbc: event.mbc
										}}
											selected={!!selected}
											onClick={onSelectOdd}
										></OutcomeItem>
									</OUTCOME_WRAPPER>



								})
							}
						</div>

					</EVENT_ITEM>
				})
			}
		</MATCH_LIST_WRAPPER >
	);
}

export default MatchList;
