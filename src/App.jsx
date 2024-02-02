import Header from "./components/Header";
import CardData from "./components/CardData";
import Card from "./components/Card";

export default function App() {
  const PropedCard = CardData.map((card) => {
    console.log(card);
    return <Card key={card.id} {...card} />;
  });

  return (
    <>
      <div className="app--container">
        <Header />
        {PropedCard}
      </div>
    </>
  );
}
