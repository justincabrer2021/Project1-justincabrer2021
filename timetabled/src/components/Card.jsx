const Card = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <img src={props.image} alt={props.name} className="card-image" />
      <h3>{props.name}</h3>
      <p>{props.location}</p>
    </div>
  )
}

export default Card
