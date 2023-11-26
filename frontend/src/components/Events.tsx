import { Link } from "react-router-dom";
import { type Category } from "./GetData";

type EventProps = {
  categories: Category[];
};

const Events = ({ categories }: EventProps) => {
  return (
    <div>
      <h2 className="h2-happenings">Happenings under mässan</h2>
      <div className="events-wrapper">
        {categories.map((category) => (
          <Link to={`${category.id}`} key={category.id}>
            <div className="event-card">
              <img className="event-img" src={category.img} alt="" />
              <strong><h3>{category.title}</h3></strong>
              <p><strong>Tid: </strong>{category.time}</p>
              <p><strong>Instruktör: </strong>{category.instructor}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
