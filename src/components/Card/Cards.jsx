import { useParallax } from "../../utilities/hooks/useParallax"

export const Cards = ({ cards }) => {

    const parallaxStyles = useParallax(10);

    return (
        <>
            <div className='upperCards-section'>

                <ul className="cards" style={parallaxStyles}>
                    {cards.map(item => (
                        <li key={item.id}>
                            <span className="tag-span">{item.tagName}</span>
                            <img src={`/${item.image}`} alt="" />
                            <div className="cards-text">

                                <h2 className="cards-h2">{item.title}</h2>
                                <p className="subtitle-p">{item.description}</p>
                            </div>

                        </li>
                    ))}
                    <li></li>
                </ul>


            </div>
        </>
    )
}