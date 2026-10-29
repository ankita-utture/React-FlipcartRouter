import Products from '../data/productdata.json';
import { useParams } from 'react-router';
import './describe.css';
import { useId } from 'react';

function Describe(){

    let proid = useParams();
    let product = Products.find((data)=>data.id == proid.id);
    let imgId = useId();

    return(
        <>
            <div className="container py-5">
                {/* Product Card */}
                <div className="card product-detail-card border-0 shadow">
                    <div className="card-body p-4">
                        <div className="row g-5">
                            {/* ================= IMAGES ================= */}
                            <div className="col-md-6">
                                <div className="row">
                                    {/* Small Images */}
                                    <div className="col-3">
                                        {product.diffimages.map((image,index)=>(
                                            <div className="thumbnail-box mb-3" key={index}>
                                                <img src={image} alt={product.title}
                                                onClick={(e)=>{
                                                 document.getElementById(imgId).setAttribute("src",e.target.src);
                                                }}
                                                 className="thumbnail-img"/>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Big Image */}
                                    <div className="col-9">
                                        <div className="main-image-box">
                                            <img src={product.diffimages[0]} alt={product.title} className="product-detail-img" id={imgId}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ================= PRODUCT INFO ================= */}
                            <div className="col-md-6">
                                <span className="badge bg-primary mb-3">ELECTRONICS</span>
                                <h1 className="fw-bold mb-3">{product.title}</h1>
                                {/* Rating */}
                                <div className="mb-3">
                                    <span className="badge bg-success fs-6">4.5 ★</span>
                                    <span className="text-secondary ms-2">125 Ratings & Reviews</span>
                                </div>
                                <hr />

                                {/* Price */}
                                <div className="my-4">
                                    <h2 className="fw-bold text-success mb-1">₹{product.price}</h2>
                                    <span className="text-success"> Inclusive of all taxes </span>
                                </div>

                                {/* Description */}
                                <div className="mb-4">
                                    <h5 className="fw-bold">Product Description</h5>
                                    <p className="text-secondary">{product.description}</p>
                                </div>

                                {/* Features */}
                                <div className="mb-4">
                                    <h5 className="fw-bold">Key Features</h5>
                                    <ul className="list-group">
                                        {product.features.map((feature,index)=>(
                                            <li key={index} className="list-group-item border-0 px-0" >
                                            <span className="text-success me-2">✓</span>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Buttons */}
                                <div className="d-flex gap-3">
                                    <button className="btn btn-warning btn-lg flex-fill fw-semibold">
                                        🛒 Add to Cart </button>
                                    <button className="btn btn-primary btn-lg flex-fill fw-semibold">
                                        Buy Now</button>
                                </div>

                                {/* Extra Info */}
                                <div className="row text-center mt-4 pt-4 border-top">
                                    <div className="col-4">
                                        <div className="fs-4">🚚</div>
                                        <small>Free Delivery</small>
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-4">🔄</div>
                                        <small>7 Days Return</small>
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-4">🛡️</div>
                                        <small>Secure Payment</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Describe;