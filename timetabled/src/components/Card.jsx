const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>{props.location}</p>
    </div>
  )
}

export default Card
