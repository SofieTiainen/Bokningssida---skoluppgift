import axios from 'axios';

const FetchEventData = async (endPointName: string) => {
    try {
        const response = await axios.get(`http://localhost:3000/${endPointName}`);
        // console.log("response", response.data)
        return response.data

    } catch (error) {
        console.error("Error fetching event data: ", error)
    }
}

export default FetchEventData;