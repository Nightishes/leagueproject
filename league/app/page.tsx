import Image from "next/image";
import './mainLayout.scss'
import Header from "./header/header";


export default function Home() {
  return (
    <>
     <Header></Header>
    <main>
      <Image src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" width={100} height={100} alt="Picture of Champ"></Image>
    </main>
    </>
   
  );
}
