import Modelpic from "../assets/images/ambassador_model.png";
import Premiumpic from "../assets/images/premium_bottle.png";
import "../assets/styles/frag.css";
import Swipe from "./swipe.js";

export default function Fragrance_Store(){

return(
    <>
        <div className="fragrance">
            <h2 className="fragrance_topic" >FRAGRANCE STORE</h2><hr style={{marginTop:"28px",marginLeft:"55px",marginRight:"55px",background:"blue"}}/>
            <p className="fragrance_para">Fragrances You Will Love</p>
            <Swipe/>
            <div className="screen2">
                <img src={Modelpic} ></img>
                <div  className="datenight"><h1>Date  Night  Special</h1>
                <p style={{color:"#ffffff",opacity:"0.8",lineHeight:"40px"}}>Planning a Date Night? Keeping things Casual and seemingly spontaneous</p><br/>
                <button >VIEW BRANDS</button></div>
            </div><br/><br/>

            <div  className="screen3">
                <div className="premium"><h1>Premium Fragrances</h1>
                <p>Planning a Date Night? Keeping things Casual and seemingly spontaneous</p>
                <button >VIEW BRANDS</button></div>
                <img src={Premiumpic} ></img>
            </div>


        </div>
    </>
)
}