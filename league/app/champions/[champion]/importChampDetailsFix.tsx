import Image from "next/image";

interface champResponse {
  id: string;
  key: string;
  name: string;
  title: string;
  resource: string;
  attacktype: string;
  adaptiveType: string;
  stats: Object;
  roles: unknown[];
  attributeRatings: Object;
  abilities: Object;
  releaseDate: string;
  patchLastChanged: string;
  price: Object;
  lore: string;
  skins: any[];
}

export default async function ChampSummaryDetails2({ champion }) {
  const answerChampDetails = await queryChampDetails(champion);
  const statsNeeded = [
    "health",
    "healthRegen",
    "mana",
    "manaRegen",
    "armor",
    "magicResistance",
    "attackDamage",
    "movespeed",
    "criticalStrikeDamage",
    "attackSpeed",
    "attackRange",
  ];

  return (
    <>
      <article>
        <section className="lore-name-champion">
          <h2>{answerChampDetails.name}</h2>
          <h3>{answerChampDetails.title}</h3>
          <Image
            width={607}
            height={358}
            src={`${answerChampDetails.skins[0].splashPath}`}
            alt={answerChampDetails.name}
          ></Image>
          <p>{answerChampDetails.lore}</p>
        </section>
        <section className="section-stats-info-skills-champ">
          <p>Character stats: </p>
          <div className="stats-info-skills-champ">
            <div className="champ-stats-div">
              {Object.entries<any>(answerChampDetails.stats)
                .filter(
                  (item) =>
                    item.includes("health") ||
                    item.includes("mana") ||
                    item.includes("manaRegen") ||
                    item.includes("armor") ||
                    item.includes("magicResistance") ||
                    item.includes("attackDamage") ||
                    item.includes("movespeed") ||
                    item.includes("criticalStrikeDamage") ||
                    item.includes("attackSpeed") ||
                    item.includes("attackRange")
                )
                .map((stat) => {
                  return (
                    <>
                      <ul key={answerChampDetails.stats + stat[0]}>
                        <ol className="stats-grouping-ol">
                          {stat[0]}
                          <div>
                            <p>{stat[1].flat}</p>
                            <p>{stat[1].perLevel}</p>
                          </div>
                        </ol>
                      </ul>
                    </>
                  );
                })}
            </div>
            {/* <div className="champ-info-div">
              {Object.keys(answerChampDetails.attributeRatings).map(
                (infoChamp) => {
                  return (
                    <ul key={`info + ${infoChamp}`}>
                      {infoChamp}:{" "}
                      {answerChampDetails.attributeRatings[infoChamp]} / 5
                    </ul>
                  );
                }
              )}
            </div> */}
            <div className="champion-abilities-div">
              {Object.values(answerChampDetails.abilities).map((ability) => {
                return (
                  <>
                    <div key={ability[0].name}>
                      <p>{ability[0].name}</p>
                      <Image
                        alt={ability[0].name}
                        width={48}
                        height={48}
                        src={ability[0].icon}
                      ></Image>
                      <p>{ability[0].effects[0].description}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export async function queryChampDetails(
  champion: string
): Promise<champResponse> {
  return (
    await fetch(
      `http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/${champion}.json`,
      { next: { revalidate: 60 } }
    )
  )
    .json()
    .catch(console.error);
}
