import React, {useEffect, useRef} from "react";
import Card from "./Card";
import Data from "./Data";

export default function CardStrech(){
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current
        const scrollSpeed = 1
        let animationFrameId

        const scroll = () => {
            container.scrollLeft += scrollSpeed
            if(container.scrollLeft >= container.scrollWidth / 2){
                container.scrollLeft = 0
            }
            animationFrameId = requestAnimationFrame(scroll)
        }

        animationFrameId = requestAnimationFrame(scroll)

        return () => cancelAnimationFrame(animationFrameId)
    }, [])
    return(
        <div className="Card-container" ref={containerRef}>
            {[...Data, ...Data].map((item, index) => (
                    <Card
                    key = {index}
                    id = {item.id}
                    job = {item.job}
                    name = {item.name}
                    image = {item.image}
                    role = {item.role}
                />
            ))
            }
        </div>

    )
}