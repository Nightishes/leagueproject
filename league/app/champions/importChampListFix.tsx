import Image from "next/image";
import Link from "next/link";
import queryChampList from "./queryChampionList";

export default async function ChampList2({ sharedState }, { sharedStateTag }) {
  const champions = await queryChampList();
  // console.log({ sharedState });
  // console.log(champions);
  const championList = Object.values<any>(champions);

  let filteredList = championList;
  if (sharedState != "") {
    filteredList = filteredList.filter((item) =>
      item.name.toLowerCase().includes(sharedState)
    );
  }

  return (
    <ul className="list-champion">
      {filteredList.map((champion) => {
        return (
          <>
            <div
              className="champion-short-summary"
              key={champion.key + champion.name + champion.id}
            >
              <Link href={`/champions/${champion.name}`}>
                <Image
                  width={144}
                  height={144}
                  src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${champion.image.full}`}
                  alt={champion.name}
                ></Image>
                <p>{champion.name}</p>
                {Object.keys(champion.info).map((infoChamp) => {
                  return (
                    <p key={`statistics + ${infoChamp} + ${champion.name}`}>
                      {infoChamp}: {champion.info[infoChamp]} / 10
                    </p>
                  );
                })}
              </Link>
            </div>
          </>
        );
      })}
    </ul>
  );
}
