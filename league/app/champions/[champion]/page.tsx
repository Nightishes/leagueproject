import "../../mainLayout.scss";
import "./assets/champDetails.scss";

import ChampSummaryDetails2 from "./importChampDetailsFix";

export default function ChampionSummary({
  params: { champion },
}: {
  params: { champion: string };
}) {
  return (
    <>
      <main className="main-champion-long-summary">
        <ChampSummaryDetails2 champion={champion} />
      </main>
    </>
  );
}
