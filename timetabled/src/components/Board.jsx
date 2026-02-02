import Card from './Card'

const Board = () => {
  const restaurants = [
    {
      name: "Talkin Tacos",
      location: "Miami, FL",
      color: "#FFADAD",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Lazy Dog",
      location: "Boca Raton, FL",
      color: "#FFD6A5",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "BJ's Restaurant & Brewhouse",
      location: "Pembroke Pines, FL",
      color: "#FDFFB6",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Flanigan's",
      location: "South Florida",
      color: "#CAFFBF",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Yard House",
      location: "Miami Beach, FL",
      color: "#9BF6FF",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Joe's Stone Crab",
      location: "South Beach, FL",
      color: "#A0C4FF",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Versailles Restaurant",
      location: "Little Havana, FL",
      color: "#BDB2FF",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "The Cheesecake Factory",
      location: "Aventura, FL",
      color: "#FFC6FF",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Coyo Taco",
      location: "Wynwood, FL",
      color: "#FFADAD",
      image: "https://images.pexels.com/photos/27365304/pexels-photo-27365304.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      name: "Batch Gastropub",
      location: "Brickell, FL",
      color: "#FFD6A5",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=60"
    }
  ]

  return (
    <div className="board">
      {restaurants.map((r, index) => (
        <Card
          key={index}
          name={r.name}
          location={r.location}
          color={r.color}
          image={r.image}
        />
      ))}
    </div>
  )
}

export default Board 
