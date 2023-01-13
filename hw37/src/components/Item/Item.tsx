import React, {useState} from "react";
import '../Item/Item.css'

interface Props {
    text: string,
    id: number,
    deleteTodo: any
}




const Item: React.FC<Props> = ({text, id, deleteTodo}) => {
    const [complete, setComplete] = useState<boolean>(false);

    function isActive():void {
        setComplete(!complete)
    }

    return ( 
        <li 
            className="list__item" 
            key={id} 
            onClick={isActive}
        >
            <div className="list__content">
                <div className={complete ? "list__point--complete" : "list__point"}></div>
                <p className={complete ? "list__text--complete" : "list__text"}>
                    {text}
                </p>
            </div>
            <button 
                className="button__delete"
                onClick={() => deleteTodo(id)}
            >
                Del
            </button>
        </li>
    );
}
 
export default Item;