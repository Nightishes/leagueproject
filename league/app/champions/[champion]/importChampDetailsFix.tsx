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
                      <ul key={stat[0] + answerChampDetails.name}>
                        <ol className="stats-grouping-ol">
                          <p> {stat[0]}</p>
                          <div className="stat-flat-level-div">
                            <p> At lv 1: {stat[1].flat} </p>
                            {stat[1].perLevel != 0 && (
                              <p> Per level: {stat[1].perLevel}</p>
                            )}
                          </div>
                        </ol>
                      </ul>
                    </>
                  );
                })}
            </div>
            <div className="champion-abilities-div">
              {Object.values(answerChampDetails.abilities).map((ability) => {
                return (
                  <>
                    <div
                      key={ability[0].name}
                      className="champion-ability-single-div"
                    >
                      <p>{ability[0].name}</p>
                      <Image
                        alt={ability[0].name}
                        width={96}
                        height={96}
                        src={ability[0].icon}
                      ></Image>
                      {ability[0].effects.map((descriptionSkill) => {
                        return (
                          <p
                            key={
                              ability[0] + ability[0].effects.descriptionSkill
                            }
                          >
                            {descriptionSkill.description}
                          </p>
                        );
                      })}

                      {ability[0].cooldown != null &&
                        Object.entries<any>(ability[0].cooldown)
                          .filter((item) => item.includes("modifiers"))
                          .map((currentCooldown) => {
                            return (
                              <div
                                key={
                                  ability[0] +
                                  answerChampDetails.name +
                                  answerChampDetails.title
                                }
                              >
                                {Object.values<any>(currentCooldown[1]).map(
                                  (singleCooldown) => {
                                    console.log(
                                      typeof singleCooldown.values[0]
                                    );
                                    return (
                                      <ul
                                        key={
                                          ability[0] +
                                          answerChampDetails.name +
                                          [singleCooldown]
                                        }
                                      >
                                        Cooldown :{" "}
                                        {singleCooldown.values.join("/")}
                                      </ul>
                                    );
                                  }
                                )}
                              </div>
                            );
                          })}
                      {ability[0].speed != null && (
                        <p>Ability speed time : {ability[0].speed}</p>
                      )}
                      {ability[0].width != null && (
                        <p>Ability width : {ability[0].width}</p>
                      )}
                      <p>Additional notes : {ability[0].notes}</p>
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
