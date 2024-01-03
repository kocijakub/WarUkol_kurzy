import logo from '../assets/img.png'
export function Nav(){
    return(
        <div className={"nav"}>
            <ul className={"navList"}>
                <li><img src={logo} alt=""/></li>
                <li>Courses</li>
                <li>Speakers</li>
                <li>Locations</li>
            </ul>
        </div>
    )
}