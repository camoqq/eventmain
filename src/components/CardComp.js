import { Card, Image } from "antd";

const CardComp = ({ ev }) => {
  return (
    <div className="card">
      {/* This is the Card from AntDesign */}
      <Card
        hoverable={true}
        cover={
          <div className="an">
            <Image src={ev.image} />
          </div>
        }
      >
        <h2>{ev.name}</h2>
        <h3>When: {ev.date}</h3>
        <p>
          {" "}
          <b>Address:</b> {ev.location}
        </p>
        <p>
          <b>Description:</b> {ev.description}
        </p>
      </Card>
    </div>
  );
};

export default CardComp;
