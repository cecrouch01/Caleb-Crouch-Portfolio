import './Card.css'
const Card = ({type, title, body, img}) => {
    return (
        <div className={`card ${type}`}>
            <img src={img} className="card-image" />
            <div className="card-text">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Card