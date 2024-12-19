import "./CountCards.css";

interface CountCardsProps {
  title: string;
  count: number;
}

export default function CountCards({ title, count }: CountCardsProps) {
  return (
    <div className="count-card">
      <p className="count-card-title">{title}</p>
      <h1 className="count-card-count">{count}</h1>
    </div>
  );
}
