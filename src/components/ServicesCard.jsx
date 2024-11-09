import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ServicesCard({ id }) {
  const data = [
    {
      id: 1,
      title: "FINANCIAL PLANNING & MANAGEMENT",
      lists: ["list1", "list2", "list6"],
    },
    { id: 2, title: "STRATEGIC PLANNING", lists: ["list2", "list3"] },
    {
      id: 3,
      title: "STANDARD OPERATING PROCEDURES",
      lists: ["list4", "list5"],
    },
    { id: 4, title: "WORKING CAPITAL MANAGEMENT", lists: ["list6", "list2"] },
    { id: 5, title: "PEOPLE", lists: ["list1", "list2"] },
  ];

  const selectedData = data.find((item) => item.id === id);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
          {" "}
          {selectedData ? selectedData.title : data[0].title}
        </Card.Title>
        <Card.Text>
          <ul>
            {selectedData
              ? selectedData.lists.map((list, index) => (
                  <li key={index}>{list}</li>
                ))
              : data[0].lists.map((list, index) => <li key={index}>{list}</li>)}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServicesCard;
