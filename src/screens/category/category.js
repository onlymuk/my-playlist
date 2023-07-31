import React, { useState, useEffect } from "react";
import apiClient from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./category.css";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    apiClient.get("browse/categories").then(function (response) {
      setCategories(response.data.categories.items);
    });
  }, []);

  const navigate = useNavigate();

  const goCategories = (id) => {
    navigate(`/categories/${id}`, { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="content">
        <h2>Category</h2>
        <h2>Category</h2>
      </div>
      <div className="category-body">
        {categories?.slice(0, 10).map((category) => (
          <div
            className="category-card"
            key={category.id}
            onClick={() => goCategories(category.id)}
          >
            <img
              src={category.icons[0].url}
              alt="category-icons"
              className="category-image"
            />
            <p className="category-title">{category.name}</p>
            <div className="category-fade">
              <IconContext.Provider value={{ size: "50px", color: "#3D6AF1" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
