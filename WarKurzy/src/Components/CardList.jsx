import {Card} from "./Card.jsx";

export function CardList(){
    const data = [
        {
            "name": "Course 1",
            "speaker": "Dr. Smith",
            "location": "Los Angeles",
            "date": "2023-03-21",
            "isNew": true
        },
        {
            "name": "Course 2",
            "speaker": "Prof. Johnson",
            "location": "Los Angeles",
            "date": "2023-08-26",
            "isNew": true
        },
        {
            "name": "Course 3",
            "speaker": "Dr. Brown",
            "location": "Chicago",
            "date": "2023-08-23",
            "isNew": true
        },
        {
            "name": "Course 4",
            "speaker": "Dr. Williams",
            "location": "New York",
            "date": "2023-11-03",
            "isNew": true
        },
        {
            "name": "Course 5",
            "speaker": "Prof. Davis",
            "location": "Houston",
            "date": "2023-11-05",
            "isNew": false
        },
        {
            "name": "Course 6",
            "speaker": "Prof. Davis",
            "location": "New York",
            "date": "2023-11-10",
            "isNew": true
        },
        {
            "name": "Course 7",
            "speaker": "Dr. Williams",
            "location": "New York",
            "date": "2023-09-22",
            "isNew": true
        },
    ]
    const cards = data.map((item,index) =>{
        return Card("Law 10"+(index+1),item.name,item.speaker,item.location,item.date,item.isNew)
    })

    return <div className={"cards"}>{cards}</div>
}