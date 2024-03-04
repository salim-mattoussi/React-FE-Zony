import React, { useState } from 'react'
import './Product.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
const Product = () => {

    const [MenuProducts, setMenuProducts]= useState(ProductsData)
    
    const filtre = ( type )=>{
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }
 
    return (
    <div className="container-p">
        <img src={Plane} alt="" />
        <h1>Our Featured Products</h1>

        <div className="products">
            <ul className="menu-p">
                <li onClick={()=>setMenuProducts(ProductsData)}>ALL</li>
                <li onClick={()=>filtre("skin care")}>Skin Care</li>
                <li onClick={()=>filtre("conditioner")}>conditionners</li>
                <li onClick={()=>filtre("foundation")}>Foundations</li>
            </ul>
            <div className="list">
                {
                    MenuProducts.map((product,i)=>(
                        <div className="product">
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail} </span>
                                </div>
                                <span>{product.price}$ </span>
                                <div>Show Now</div>
                            </div>
                            <img src={product.img} alt="" className='img-p' />
                        </div>
                    ))

                    
                }
            </div>
        </div>
    </div>
  )
}

export default Product