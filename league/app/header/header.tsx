import Link from "next/link"
import "./assets/header.scss"


export default function Header(){
    return(
        <header>
        <h1><Link href={"/"} >League</Link></h1>
        <ul>
            <li>
                <Link href={"/champions/"} passHref>
                Champions
                </Link> 
            </li>
            <li>
                <Link href={"/items"}>
                Items
                </Link>  
            </li>
            <li>
                Champions
            </li>
            <li>
                Champions
            </li>
        </ul>
    </header>
    )
}