type GeneralEventInfoProps = {
    description: string;
    location: string;
    time: string;
    address: string;
}

const GeneralEventInfo = ({description, location, time, address}: GeneralEventInfoProps) => {
    return (
        <div className="general-info-wrapper">
            <h2>Välkommen till träningsmässan 2024!</h2>
            <p>{description}</p>
            <h3>Var?</h3>
            <p>{location}</p>
            <p>{address}</p>
            <h3>När?</h3>
            <p>{time}</p>
        </div>
    )
}

export default GeneralEventInfo;