import Products from '../data/productdata.json';
import { NavLink } from 'react-router';
import './home.css';

function Home(){

    return(
        <>
            {/* Header Section */}
            <div className="bg-primary text-white py-5">
                <div className="container text-center">
                    <h1 className="display-5 fw-bold">Flipcart Products</h1>
                    <p className="lead mb-0">Explore electrical & home appliances</p>
                  </div>
            </div>

            {/* Products Section */}
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">Our Products</h2>
                        <p className="text-secondary mb-0">Choose the best products for your home</p>   
                    </div>
                    <span className="badge bg-primary fs-6">{Products.length} Products
                    </span>
                </div>

                <div className="row g-4">
                    {Products.map((data)=>(
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3"  key={data.id}>
                            <div className="card product-card h-100 border-0 shadow-sm">
                                <NavLink to={`/products/${data.id}`} className="text-decoration-none text-dark">
                                    {/* Image */}
                                    <div className="product-image-box p-3">
                                        <img src={data.diffimages[0]} className="product-img" alt={data.title}/>
                                    </div>

                                    {/* Product Details */}
                                    <div className="card-body">
                                        <h5 className="card-title fw-semibold">{data.title}</h5>

                                        <div className="mb-2">
                                            <span className="text-warning">★★★★★ </span>
                                            <small className="text-secondary ms-2">4.5</small>
                                        </div>

                                        <h4 className="fw-bold text-success">₹{data.price}</h4>
                                        <button className="btn btn-primary w-100 mt-2">
                                            View Product
                                        </button>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;