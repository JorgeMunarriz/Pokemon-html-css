import { MouseEventHandler } from "react";
// import PokeballClosedStyles from "./pokeballClosed.styles";
import "./pokeballcss.css"


type ButtonProps = {
    children: React.ReactNode;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    
}


const PokeballClosed = ({children, handleClick}: ButtonProps) => {


  return (
    <button className="pokeball" onClick={handleClick}>
        
            <div className="button">{children}</div>
        

    </button>
  )
}

export default PokeballClosed