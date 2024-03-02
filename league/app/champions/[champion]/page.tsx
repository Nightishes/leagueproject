import "../../mainLayout.scss";
import "./assets/champDetails.scss";
import ChampSummaryDetails from "./importChampDetails";
import ChampSummaryDetails2 from "./importChampDetailsFix";

export default function ChampionSummary({
  params,
}: {
  params: { champion: string };
}) {
  return (
    <>
      <main className="main-champion-long-summary">
        <ChampSummaryDetails2 champion={{ params }} />
      </main>
    </>
  );
}
