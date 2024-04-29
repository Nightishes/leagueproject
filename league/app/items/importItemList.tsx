import queryItemList from "./queryItemsList";
import Image from "next/image";
import Link from "next/link";

export default async function ExportItemList({ props }) {
  const itemList = await queryItemList();

  const arrayListCriteria = ["TURRET", "MINION"];
  const itemListTransfer = Object.values<any>(itemList || {}).filter(
    (item) => !item.rank.some((x) => arrayListCriteria.includes(x))
  );

  let modulableList = itemListTransfer;
  function filterPerTags() {
    modulableList = itemListTransfer.filter(
      (item) =>
        item.rank[0] != undefined &&
        item.rank[0].toString().toLowerCase() == props.sharedStateTag
    );
  }

  function filterPerName() {
    modulableList = itemListTransfer.filter((item) =>
      item.name.toLowerCase().includes(props.sharedState)
    );
  }

  if (props.sharedState != "") {
    filterPerName();
    if (props.sharedStateTag != "") {
      filterPerTags();
    }
  }

  if (props.sharedStateTag != "") {
    filterPerTags();
  }

  return (
    <ul className="list-item">
      {modulableList.map((item) => {
        return (
          <div key={item.name} className="item-short-summary">
            <Link href={`/items/${item.id}`}>
              <Image width={144} height={144} src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </Link>
          </div>
        );
      })}
    </ul>
  );
}
