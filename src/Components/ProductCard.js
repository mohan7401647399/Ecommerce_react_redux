import React from "react";
import { useNavigate } from "react-router-dom";


export default function ProductCard(props) {
  const navigate = useNavigate()
  return (
    <div className="card m-2 cursor-pointer" style={{ width: 300 }} role="button" onClick={() => navigate(`/product/${props.id}`)}>
      <div className="mt-2">
        <img
          src={props.thumbnail}
          alt={props.title}
          height={200}
          width={200}
          className="border-radius-9"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="mt-2">Price: {`Rs.${props.price}`}</h6>
          <h6 className="mt-2">discount: {props.discountPercentage}%</h6>
          <h6 className="mt-2">Rating: {props.rating}</h6>
          <div className='mt-4'>
            {props.stock > 0 ? (
              <button className="btn btn-success">Available</button>
            ) : (
              <button className="btn btn-outline-danger">Out of stock</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
