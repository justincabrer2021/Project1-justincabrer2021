import Card from './Card'

const Board = () => {
  return (
    <div className="board">
      <Card name="Talkin Tacos" location="Miami, FL" />
      <Card name="Lazy Dog" location="Boca Raton, FL" />
      <Card name="BJ's Restaurant & Brewhouse" location="Pembroke Pines, FL" />
      <Card name="Flanigan's" location="South Florida" />
      <Card name="Yard House" location="Miami Beach, FL" />
      <Card name="Joe's Stone Crab" location="South Beach, FL" />
      <Card name="Versailles Restaurant" location="Little Havana, FL" />
      <Card name="The Cheesecake Factory" location="Aventura, FL" />
      <Card name="Coyo Taco" location="Wynwood, FL" />
      <Card name="Batch Gastropub" location="Brickell, FL" />
    </div>
  )
}

export default Board
