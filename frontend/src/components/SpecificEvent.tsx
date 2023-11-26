import { useParams } from "react-router-dom";
import FetchEventData from "../utilities/FetchEventData";
import { useEffect, useState } from "react";
import {type Category } from "./GetData";


const SpecificEvent = () => {
    const [specificEvent, setSpecificEvent] = useState<Category | null>(null)

    const { categoryId } = useParams();
    const endPointName = `categories/${categoryId}`

    useEffect(() => {
        const fetchData = async () => {
            const categoryData  = await  FetchEventData(endPointName);        
            setSpecificEvent(categoryData)
        }
        fetchData();
    }, []);
    


    return (
        <div >
            {specificEvent ? (
                <div className="specific-event-wrapper">
                    <h2>{specificEvent.title}</h2>
                    <img src={specificEvent.img} alt="" />
                    <p>Tid: {specificEvent.time}</p>
                    <p>Instruktör: {specificEvent.instructor}</p>
                    <p>Information: {specificEvent.information}</p>
                </div>
            ) : null}
        </div>
    )
}

    


export default SpecificEvent;