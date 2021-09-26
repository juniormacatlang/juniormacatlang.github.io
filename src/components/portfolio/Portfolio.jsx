import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
    pythonPortfolio,
    cPortfolio,
    javascriptPortfolio
} from "../../data";

export default function Portfolio() {
        const [selected, setSelected] = useState("python")
        const [data, setData] = useState([])

    const list = [
        {
            id: "python",
            title: "Python",
        },
        {
            id: "c++",
            title: "C++",
        },
        {
            id: "javascript",
            title: "Javascript",
        },
    ];

    useEffect(()=>{

        switch(selected){
            case "python":
                setData(pythonPortfolio);
                break;
            case "c++":
                setData(cPortfolio);
                break;
            case "javascript":
                setData(javascriptPortfolio);
                break;
            default:
                setData(pythonPortfolio);
        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                        title={item.title} 
                        active = {selected === item.id} 
                        setSelected ={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
                
            </div>
        </div>
    )
}
