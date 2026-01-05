import PlaneLogo from "./../images/TravelPlane.png"
export default function Header(){
    return(
        <header>
                <img src= {PlaneLogo} alt="plane logo"/>
                <h1>Shahin's travel journal</h1>
        </header>
    )
}