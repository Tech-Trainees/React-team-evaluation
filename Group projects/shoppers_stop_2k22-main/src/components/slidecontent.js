import product from "../assets/images/fragrance_bottle.png";

export default function SlideContent(){
    return(
        <div className="product_tile" >
        <div className="fea_del" style={{display:"inline-flex",fontSize:"12px"}}>
            <span className="star" ></span>
            <span className="featured">Featured</span>
            <span className="deliver">Express Delivery</span>
            <span className="heartpng"></span>
        </div>
        <img src={product} ></img><br/>
        <h3 className="prod_title">Bvlgari Omnia Golden Citrine Eua De Toilette Spray</h3>
        <div style={{display:"block"}}><p className="sizes">2 Sizes available</p><br/>
            <div className="pricedet" style={{display:"inline-flex"}}>
                <h3 >MRP : ₹1200</h3><p className="strike">₹1500</p ><b>20% Off</b>
            </div><br/><br/>
            <u className="gift">Free Gift Available</u><br/><br/>
        </div>
        <div className="btn-2"><div className="btncart" style={{background:"#DEA3B7"}}><p>ADD TO CART</p></div>  
        <div className="btnbuy"><p>BUY NOW</p></div>
        </div>
    </div>
    )
}