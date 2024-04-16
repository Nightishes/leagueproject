import queryItemList from "./queryItemsList";
import Image from "next/image";
import Link from "next/link";

export default async function ExportItemList() {
  const itemList = await queryItemList();

  // const arrayListCriteria = ["TURRET", "MINION"];
  const itemListTransfer = Object.values<any>(itemList).filter(
    (item) => !item.rank.some("TURRET") && !item.rank.includes("MINION")
  );

  return (
    <ul className="list-item">
      {itemListTransfer.map((item) => {
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
