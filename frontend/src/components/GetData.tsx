import { useState, useEffect } from "react";
import FetchEventData from "../utilities/FetchEventData";
import GeneralEventInfo from "./GeneralEventInfo";
import Events from "./Events";

export type EventInfo = {
  description: string;
  location: string;
  date: string;
  time: string;
  title: string;
  slogan: string;
  address: string;
};

export type Category = {
  id: number;
  title: string;
  time: string;
  instructor: string;
  information: string;
  img: string;
};


const getData = () => {
  const [event, setEvent] = useState<EventInfo | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);

  const endPointName1 = 'eventInformation';
  const endPointName2 = 'categories';

  useEffect(() => {
    const fetchData = async () => {
      const eventData = await FetchEventData(endPointName1);
      setEvent(eventData);

      const categoriesData = await FetchEventData(endPointName2);
      setCategories(categoriesData)
      
    };

    fetchData();

  }, []);

  return (
    <div>
      {event && categories ? (
        <div>
          <GeneralEventInfo description={event.description} location={event.location} time={event.time} address={event.address}/>
          <Events categories={categories} />
        </div>
      ) : null}
    </div>
  );
};

export default getData;
