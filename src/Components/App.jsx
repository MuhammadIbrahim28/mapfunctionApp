import react from "react";
import Astra from "./Astra";
import Card from "./Card";
import contacts from "./contacts";

function CreateCard(contact) {
  return (
    <Card
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}

      {/* <Card
        name={contact[0].name}
        img={contact[0].imgURL}
        tel={contact[0].phone}
        email={contact[0].email}
      />
      <Card
        name={contact[1].name}
        img={contact[1].imgURL}
        tel={contact[1].phone}
        email={contact[1].email}
      />
      <Card
        name={contact[2].name}
        img={contact[2].imgURL}
        tel={contact[2].phone}
        email={contact[2].email}
     /> */}
    </div>
  );
}
export default App;
