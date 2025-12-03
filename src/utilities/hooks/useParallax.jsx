import { useState, useEffect } from 'react';

export const useParallax = (depth = 20) => {
    const [offset, setOffset] = useState(0);


   useEffect(()=>{
    const handleScroll = () =>{
        setOffset(window.scrollY * (depth / 100));

    };

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);
   }, [depth]);

   return{
    transform: `translateY(${offset}px)`,
    transition: `all 0.8s ease` 
   
};


}
   