import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductType } from '../types/product';




type ListProductDetail  = [
    data: ProductType[],
    onListDetail: (id: number) =>void,
]

const ProductDetail = (props: ListProductDetail) => {
    const { id } = useParams();
    useEffect(() => {
      const getProduct = async () => {
        await props.onListDetail(id)
      }
      getProduct();
    },[id])
    // const [product, setProduct] = useState<ProductType>();
    // useEffect(() => {
    //     const getProduct = async() => {
    //         const { data } = await read(id);
    //         setProduct(data)
    //     }
    //     getProduct();
    // }, [id])
    
  return (
    <div className="container">
  <div className="row single">
    <div className="col-md-9 span-single">
      <div className="single_left">
        <div className="grid images_3_of_2">
          <ul id="etalage">
            <li>
              <a href="optionallink.html">
                <img className="etalage_thumb_image" src="images/d1.jpg" />
                
              </a>
            </li>

          </ul>
          <div className="clearfix" />		
        </div>
        <div className="desc1 span_3_of_2">
          <h3>product name here</h3>
          <p>{props.data.price} <a href="#">click for offer</a></p>
          <div className="det_nav">
            <h4>related products :</h4>
            <ul>
              <li><a href="#"><img src="images/pic-6.jpg" className="img-responsive" alt="" /></a></li>

            </ul>
          </div>
          <div className="filter-by-color">
            <h3>Filter by Color</h3>
            <ul className="w_nav2">
              <li><a className="color1" href="#" /></li>
              <li><a className="color2" href="#" /></li>
              <li><a className="color3" href="#" /></li>
              <li><a className="color4" href="#" /></li>
              <li><a className="color5" href="#" /></li>
              <li><a className="color6" href="#" /></li>
              <li><a className="color7" href="#" /></li>
              <li><a className="color8" href="#" /></li>
              <li><a className="color9" href="#" /></li>
              <li><a className="color10" href="#" /></li>
              <li><a className="color11" href="#" /></li>
              <li><a className="color12" href="#" /></li>
              <li><a className="color13" href="#" /></li>
              <li><a className="color14" href="#" /></li>
              <li><a className="color15" href="#" /></li>
              <li><a className="color16" href="#" /></li>
              <li><a className="color17" href="#" /></li>
              <li><a className="color18" href="#" /></li>
              <li><a className="color19" href="#" /></li>
            </ul>
          </div>
          <div className="btn_form">
            <a href="single.html">buy now</a>
          </div>
          <a href="#"><span>login to save in wishlist </span></a>
        </div>
        <div className="clearfix" />
      </div>

      		
    </div>
    <div className="col-md-3 span_1_of_right">
      <div className="w_nav1">
        <h4>All</h4>
        <ul>
          <li><a href="products.html">products</a></li>
          <li><a href="#">new arrivals</a></li>
          <li><a href="#">trends</a></li>
          <li><a href="#">Bages</a></li>
          <li><a href="#">shoes</a></li>
          <li><a href="#">sale</a></li>
        </ul>	
        <h3>filter by</h3>
      </div>



    </div>
  </div></div>

  )
}

export default ProductDetail