import React from "react";
import { Link } from 'react-router-dom';

export default function ProductCard({ single }) {
    return (
        <Link to={`/product/${single._id}`} className="text-decoration-none bg-danger">
            <br /><br /><br />
            <img src={single.image} alt="" className="img-fluid" />
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Name: </strong>
                    <strong>{single.name}</strong>
                </li>
                <li className="list-group-item">
                    <strong>Type: </strong>
                    {single.type}
                </li>
                <li className="list-group-item">
                    <strong>Price: </strong>
                    {single.price}
                </li>
                <li className="list-group-item">
                    <strong>Stock: </strong>
                    {single.serves}
                </li>
            </ul>
        </Link>
    );
}
