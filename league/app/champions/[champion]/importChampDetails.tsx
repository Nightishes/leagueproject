import Image from "next/image"
import Link from "next/link"



export default async function ChampSummaryDetails({champion}){
    let pointerChamp= Object.values(champion.params)
    try{
        const responseChampDetails = await fetch(`http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/${pointerChamp}.json`)
        const answerChampDetails = await responseChampDetails.json()
        
            return(
                <> 
                <article>
                    <section className="lore-name-champion">
                        <h2>{answerChampDetails.name}</h2>
                        <h3>{answerChampDetails.title}</h3>
                        <Image width={607} height={358} src={`${answerChampDetails.skins[0].splashPath}`} alt={answerChampDetails.name}></Image>
                        <p>{answerChampDetails.lore}</p>
                    </section>
                    <section className="section-stats-info-skills-champ">
                        <p>Character stats: </p>
                        <div className="stats-info-skills-champ">
                            <div className="champ-stats-div">
                                {Object.entries<any>(answerChampDetails.stats).map((stat)=>{
                                return(
                                <>
                                    <ul key={answerChampDetails.stats + stat[0]}>
                                        <ol>{stat[0]}</ol>
                                        {Object.keys(stat[1]).map((specificStat)=>{
                                        return(
                                            <>
                                            <ol key={`${stat[1]}` + `${specificStat}`}> {specificStat} : {stat[1][specificStat]}</ol>
                                            </>
                                        )

                                    })}
                                    
                                    </ul>
         
                                </>
                                )
                            })}
                            </div>
                            <div className="champ-info-div">
                                {Object.keys(answerChampDetails.attributeRatings).map((infoChamp)=>{
                                        return(
                                        <ul key={`info + ${infoChamp}`}>{infoChamp}: {answerChampDetails.attributeRatings[infoChamp]} / 5</ul>
                                        )
                                    })}
                            </div>
                            <div className="champion-passive-div">
                            {Object.keys(answerChampDetails.abilities).map((ability)=>{
                            return (
                            <>
                            {ability}

                            </>)}
                            )}
                            
                           
                            </div>
                           
                            
                            
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
            )
        
        
    }
    catch{
        console.error("fail")
    }
}