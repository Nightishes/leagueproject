import ItemSummaryDetails from "./assets/importItemDetails";

export default function ItemSummary({
  params: { item },
}: {
  params: { item: number };
}) {
  return (
    <>
      <main className="main-champion-long-summary">
        <ItemSummaryDetails item={item} />
      </main>
    </>
  );
}
