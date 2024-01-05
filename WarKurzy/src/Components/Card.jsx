import panak from '../assets/img_1.png'
export function Card(courseNum,name,speaker,location,date,isNew){
    function IsNew(){
        if(isNew) return <span id={"new"}>New</span>
    }
    function Click(){
       return alert(name)
    }
    return(
        <div className={"card"}>
            <div className={"cardTop"}>
                <p className={"name"}>{name}</p>
                {IsNew()}
            </div>
            <h2>{courseNum}</h2>
            <p className={"location"}>{location}</p>
            <p className={"date"}>{date}</p>
            <button onClick={Click}>Enroll</button>
            <div className={"cardBottom"}>
                <img src={panak} alt=""/>
                <p>{speaker}</p>
            </div>
        </div>
    )
}