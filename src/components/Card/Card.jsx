import { useState, useEffect } from 'react';
import { Cards } from './Cards';


export const Card = () => {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch("https://raw.githubusercontent.com/krishnagautam11/ReactTestA/refs/heads/dev/src/data/data.json");

                if (!response.ok) {
                    throw new Error(`${response.status}`);
                }

                const jsonData = await response.json();
                setCardData(jsonData.cards);
                console.log(jsonData.cards);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();


    }, []);



    return (

        <div className='mainCard-wrapper custom-container'>
            <div className="mainCard-content ">
                <Cards cards={cardData} />

                <div className="below-card">
                    <div className="below-card-text">
                        <p><b>Our mission is to create a community that inspires, informs and empowers its members.</b> Through a diverse range of articles, we delve into the realms of health, design, and web-related subjects. Whether it's exploring the latest trends in wellness, discussing innovative desgin concepts, or unraveling the inticacies of the digital landscape,e strive to provide content that not only informs but also sparks creativity and fosters a sense of well-being. Join us on this journey of positivity, knowledge, and inspiration!</p>
                    </div>
                </div>
            </div>
        </div>


    )
}