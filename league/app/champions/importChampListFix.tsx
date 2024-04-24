import Image from "next/image";
import Link from "next/link";
import queryChampList from "./queryChampionList";

export default async function ChampList2({ props }) {
  const champions = await queryChampList();
  console.log(props.sharedStateTag);
  const championList = Object.values<any>(champions);

  function filterPerTags() {
    filteredList = filteredList.filter(
      (item) =>
        item.tags[0].toLowerCase().includes(props.sharedStateTag) ||
        (item.tags[1] &&
          item.tags[1].toLowerCase().includes(props.sharedStateTag)) ||
        (item.tags[2] &&
          item.tags[2].toLowerCase().includes(props.sharedStateTag))
    );
  }

  function filterPerName() {
    filteredList = filteredList.filter((item) =>
      item.name.toLowerCase().includes(props.sharedState)
    );
  }

  let filteredList = championList;
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
    <ul className="list-champion">
      {filteredList.map((champion) => {
        return (
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
              />
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
        );
      })}
    </ul>
  );
}
