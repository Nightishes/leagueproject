import Image from "next/image";
import Link from "next/link";

interface ChampListResponse {
  [name: string]: {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: unknown;
    image: unknown;
    tags: unknown[];
    partype: string;
    stats: unknown;
  };
}

export default async function ChampList2() {
  const champions = await queryChampList();

  return (
    <ul className="list-champion">
      {Object.values<any>(champions).map((champion) => {
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
                  src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`}
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

async function queryChampList(): Promise<ChampListResponse> {
  return (
    await fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json",
      { next: { revalidate: 60 } }
    )
  )
    .json()
    .then((result) => result.data)
    .catch(console.error);
}
