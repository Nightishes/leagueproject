import '../../mainLayout.scss'
import './assets/champDetails.scss'
import ChampSummaryDetails from "./importChampDetails"
import Header from "@/app/header/header"

export default function ChampionSummary({params}: { params: { champion: string };}){
    return(
    <>
    <Header></Header>
    <main className="main-champion-long-summary">
       <ChampSummaryDetails champion={{params}}/>
       
    </main>
    </>)
}