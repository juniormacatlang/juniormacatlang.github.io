import "./navbar.scss"
import {ContactMail, PermIdentity} from "@material-ui/icons"

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {"navbar " + (menuOpen && "active")}>
            <div className = "wrapper">


                <div className="left">
                    <a href="#intro" className="logo">Rommel Jr.</a>
                    <div className="itemContainer">
                        <PermIdentity className="icon" />
                        <span>+1 775 203 4368</span>
                    </div>
                    <div className="itemContainer">
                        <ContactMail className="icon" />
                        <span>junioraodaddi@gmail.com</span>
                    </div>
                </div>
                <div className="right"> 
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className ="line1"></span>
                        <span className ="line2"></span>
                        <span className ="line3"></span>
                    </div>
                </div>


            </div>
        </div>
    )
}
