import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false, 
            backDelay: 2000,
            backSpeed: 30,
            strings: ["Computer Science and Engineering Student"],
    });

    }, [])

    return (
        <div className ="intro" id ="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="asset/portrait.png" alt=""/>
                </div>
            </div>
            <div className="right">
                    <div className="wrapper">
                        <h2>Hi there, I'm</h2>
                        <h1>Rommel Macatlang Jr.</h1>
                        <h3><span ref={textRef}></span></h3>
                    </div>
                    <a href="#portfolio">
                        <img src="asset/arrow.ico" alt=""/>
                    </a>
            </div>
        </div>
    )
}
