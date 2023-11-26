import { useEffect, useState } from "react"
import FetchEventData from "../utilities/FetchEventData";
import { type EventInfo } from "./GetData";


const Header = () => {
    const [headerInfo, setHeaderInfo] = useState<EventInfo | null>(null);
    const endPointName = 'eventInformation'


    useEffect(() => {
        const fetchData = async () => {
            const headerData = await FetchEventData(endPointName);
            setHeaderInfo(headerData);
        };
        fetchData();
    }, []); 

    return (
        <header>
            {headerInfo? (
                <div className="title-and-slogan">
                    <h1>{headerInfo.title}</h1>
                    <p>{headerInfo.slogan}</p>
                </div>
            ): null}
        </header>
    )
}

export default Header;