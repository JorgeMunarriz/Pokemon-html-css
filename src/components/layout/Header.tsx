import { useAuth0 } from "@auth0/auth0-react"
import { HeaderStyles } from "."
import { Link, useNavigate } from "react-router-dom";
import { Pokeball, PokeballClosed } from "../keyframes";
import { useState } from "react";



const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {isAuthenticated, loginWithPopup} =  useAuth0();
    const navigate = useNavigate();
    const handleLogin = async () => {
        await loginWithPopup();
        navigate("/profile")
    }
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }


  return (
    <HeaderStyles>
        <Link className="header__btn" to={"/"}>
            <Pokeball></Pokeball>
        </Link>
        <PokeballClosed children="" handleClick={handleOpen}></PokeballClosed>
        <Link className="header__btn" to={"/"}>Pokemon</Link>
        <Link className="header__btn" to={"/"}>Pokedex</Link>
        <Link className="header__btn" to={"/"}>Locations</Link>
        {
            isAuthenticated ? (

                <Link className="header__btn" to={"/"}>Profile</Link>
            ) : (
                 <button onClick={()=>handleLogin()}>Log in</button>
            )

            
        }
        
    </HeaderStyles>
  )
}

export default Header