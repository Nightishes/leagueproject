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
  const answerChampDetails = await queryChampDetails({ champion });

  console.log(queryChampDetails);
  console.log(champion);
  console.log(answerChampDetails);

  return (
    <>
      {Object.values<any>(answerChampDetails).map((champion) => {
        return (
          <>
            <article>
              <section className="lore-name-champion">
                <h2>{champion.name}</h2>
                <h3>{champion.title}</h3>
                {/* <Image
                  width={607}
                  height={358}
                  src={"`${champion.skins[0].splashPath}`"}
                  alt={champion.name}
                ></Image>
                <p>{champion.lore}</p> */}
              </section>
              <section className="section-stats-info-skills-champ">
                <p>Character stats: </p>
                <div className="stats-info-skills-champ">
                  {/* <div className="champ-stats-div">
                    {Object.entries<any>(champion.stats).map((stat) => {
                      return (
                        <>
                          <ul key={champion.stats + stat[0]}>
                            <ol>{stat[0]}</ol>
                            {Object.keys(stat[1]).map((specificStat) => {
                              return (
                                <>
                                  <ol key={`${stat[1]}` + `${specificStat}`}>
                                    {" "}
                                    {specificStat} : {stat[1][specificStat]}
                                  </ol>
                                </>
                              );
                            })}
                          </ul>
                        </>
                      );
                    })}
                  </div> */}
                  {/* <div className="champ-info-div">
                    {Object.keys(champion.attributeRatings).map((infoChamp) => {
                      return (
                        <ul key={`info + ${infoChamp}`}>
                          {infoChamp}: {champion.attributeRatings[infoChamp]} /
                          5
                        </ul>
                      );
                    })}
                  </div> */}
                  {/* <div className="champion-passive-div">
                    {Object.keys(champion.abilities).map((ability) => {
                      return <>{ability}</>;
                    })}
                  </div> */}

                  {/* <div>
                        <p>Spell n°1 : {champion.spells[0].name}</p>  
                    </div>
                    <div>
                        <p>Spell n°2 : {champion.spells[1].name}</p>
                    </div>
                    <div>
                        <p>Spell n°3 : {champion.spells[2].name}</p>
                    </div>
                    <div>
                        <p>Spell n°4 : {champion.spells[3].name}</p>
                    </div> */}
                </div>
              </section>
              <section>
                {/* {champion.allytips.map((tip:string)=>{
                        return(<p key={`tip + ${tip}`}>{tip}</p>)
                    })}
                    {champion.enemytips.map((tip:string)=>{
                        return(<p key={`tip + ${tip}`}>{tip}</p>)
                    })}
                     {champion.tags.map((tag:string)=>{
                        return(<p key={`tag + ${tag}`}>{tag}</p>)
                    })} */}
              </section>
            </article>
          </>
        );
      })}
    </>
  );
}

export async function queryChampDetails({ champion }): Promise<champResponse> {
  let pointerChampion = Object.values(champion.params);
  return (
    await fetch(
      `http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/${pointerChampion}.json`,
      { next: { revalidate: 60 } }
    )
  )
    .json()
    .then((result) => result.data)
    .catch(console.error);
}
