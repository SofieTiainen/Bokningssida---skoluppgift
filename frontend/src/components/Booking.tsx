import { useState } from "react";
import axios from "axios";

type ticket = {
  firstName: string;
  lastName: string;
  email: string;
  ticketType: string;
};

const Booking = () => {
  const [confirmationText, setConfirmationText] = useState<string>("");
  const [chosenTicket, setChosenTicket] = useState<ticket>({
    firstName: "",
    lastName: "",
    email: "",
    ticketType: "",
  });

  const handleInputChange = (e: React.ChangeEvent) => {
    e.preventDefault();
    const { value, id } = e.target as HTMLInputElement;
    setChosenTicket({
      ...chosenTicket,
      [id]: value.trim(),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/tickets",
      chosenTicket
    );
    if (response.data) {
      setChosenTicket({
        firstName: "",
        lastName: "",
        email: "",
        ticketType: "",
      });
    }

    response.data
      ? setConfirmationText("Sucess booking ticket!")
      : setConfirmationText("Error booking ticket, try again");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <h2>Boka plats till eventet</h2>
        <p>
          Man kan antingen boka in sig på morgonpassen 09.00-12-00 eller
          förmiddagspasset 12.00-15.00
        </p>
        <div className="form-div">
          <label htmlFor="firstName">Förnamn</label>
          <br />
          <input
            required
            id="firstName"
            value={chosenTicket.firstName}
            type="text"
            placeholder="Förnamn"
            onChange={handleInputChange}
          />
          <br />

          <label htmlFor="lastName">Efternamn</label>
          <br />
          <input
            required
            id="lastName"
            value={chosenTicket.lastName}
            type="text"
            placeholder="Efternamn"
            onChange={handleInputChange}
          />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            required
            id="email"
            value={chosenTicket.email}
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <br />

          <label htmlFor="ticketType">Typ av biljett</label>
          <br />
          <select
            required
            name="ticketType"
            id="ticketType"
            value={chosenTicket.ticketType}
            onChange={handleInputChange}
          >
            <option value="" hidden>
              Välj typ av biljett
            </option>
            <option value="09.00-12.00">09.00-12.00</option>
            <option value="12.00-15.00">12.00-15.00</option>
          </select>
          <br />
          <button type="submit">Boka</button>
        </div>
        <h4>{confirmationText}</h4>
      </div>
    </form>
  );
};

export default Booking;
