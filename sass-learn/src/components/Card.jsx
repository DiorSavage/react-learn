import './Card.scss'

export const Card = ({ title, subtitle }) => {
    return (
        <div className="card-container">
            <h3 className="card-title">{title} adf sdf</h3>
            <p className="card-subtitle">{subtitle} sadfasdf</p>
        </div>
    )
}