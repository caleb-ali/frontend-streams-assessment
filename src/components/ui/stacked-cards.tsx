import { useState } from "react";

interface Card {
  id: number;
  title: string;
  heading: string;
  content: string;
  color: string; 
  borderColor: string;
}

interface StackedCardsProps {
  initialCards?: Card[];
}

export function StackedCards({ initialCards }: StackedCardsProps) {
  const defaultCards: Card[] = [
    {
      id: 1,
      title: "Section 2",
      heading: "Commodo consequat",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      color: "linear-gradient(90deg, #E0DEFE 0%, #EDEEF0 54.56%, #EFEFFF 100%)",
      borderColor: "border-gray-200",
    },
    {
      id: 2,
      title: "Section 2",
      heading: "Another heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      color: "#F7F8F9",
      borderColor: "border-gray-200",
    },
    {
      id: 3,
      title: "Section 2",
      heading: "Third heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      color: "#EFEFFF",
      borderColor: "border-gray-200",
    },
    {
      id: 4,
      title: "Section 2",
      heading: "Fourth heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      color: "#4F566B",
      borderColor: "border-gray-200",
    },
  ];

  const [cards, setCards] = useState<Card[]>(initialCards || defaultCards);

  const bringToFront = (clickedId: number) => {
    const clickedCard = cards.find((card) => card.id === clickedId);
    const otherCards = cards.filter((card) => card.id !== clickedId);
    if (clickedCard) {
      setCards([clickedCard, ...otherCards]);
    }
  };

  return (
    <div className="relative mt-8">
      {cards.map((card, index) => {
        const isFirst = index === 0;
        const scale = isFirst ? 1 : 1 - index * 0.11;
        const rotate = isFirst ? 0 : index * 3;
        const translateY = -index * 10;
        
        // Check if color is a CSS gradient or hex color
        const isCssValue = card.color.includes('linear-gradient') || card.color.includes('#');
        
        return (
          <div
            key={card.id}
            onClick={() => bringToFront(card.id)}
            className={`absolute top-0 left-0 right-0 ${card.borderColor} border rounded-lg p-6 space-y-3 cursor-pointer transition-all duration-300 hover:shadow-lg origin-top ${!isCssValue ? card.color : ''}`}
            style={{
              transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
              zIndex: cards.length - index,
              height: '222.75px',
              // Apply CSS values as inline styles
              ...(isCssValue && { background: card.color }),
              // For card 4 (dark background), adjust text color for readability
              ...(card.id === 4 && { 
                color: '#FFFFFF', // White text for dark background
              }),
            }}
          >
            <h2 
              className="text-lg font-semibold"
              style={card.id === 4 ? { color: '#FFFFFF' } : {}}
            >
              {card.title}
            </h2>
            <h3 
              className="text-base font-medium"
              style={card.id === 4 ? { color: '#FFFFFF' } : {}}
            >
              {card.heading}
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={card.id === 4 ? { color: '#E5E7EB' } : {}}
            >
              {card.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}