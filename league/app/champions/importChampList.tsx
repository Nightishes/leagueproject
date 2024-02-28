import Image from "next/image"
import Link from "next/link"


export default async function ChampList(){
    try{
        const responseChampList = await fetch("https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json")
        const answerChampList = await responseChampList.json()

            const champList= Object.values<any>(answerChampList.data).map((champion)=><>
            <div className="champion-short-summary" key={champion.key + champion.name}>
                <Link href={`/champions/${champion.name}`}>
                <Image width={144} height={144} src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`} alt={champion.name}></Image>
                <p>{champion.name}</p>
                {Object.keys(champion.info).map((infoChamp)=>{
                    return(
                    <p key={`statistics + ${infoChamp}`}>{infoChamp}: {champion.info[infoChamp]} / 10</p>
                    )
                })}
                </Link>
                
            </div>
            </>)
            
            return(
                <ul className="list-champion">{champList}</ul>
            )
        
        
    }
    catch{
        console.error("fail")
    }
}