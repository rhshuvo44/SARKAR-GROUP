import React, { useState } from "react";
import GalleryData from "../jsonData/GalleryData";
import SingleProjectGallery from "./SingleProjectGallery";

const GalleryContent = () => {
  const [items, setItems] = useState(GalleryData);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterItem = (categoryItem) => {
    const updatedItems = GalleryData.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });

    setItems(updatedItems);
    setActiveCategory(categoryItem);
  };

  return (
    <>
      <ul className="simple-filter">
        <li
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => {
            setItems(GalleryData);
            setActiveCategory("all");
          }}
        >
          All
        </li>
        <li
          className={activeCategory === "logistics" ? "active" : ""}
          onClick={() => filterItem("logistics")}
        >
          Logistics
        </li>
        <li
          className={activeCategory === "navigation" ? "active" : ""}
          onClick={() => filterItem("navigation")}
        >
          Navigation
        </li>
        <li
          className={activeCategory === "engineering" ? "active" : ""}
          onClick={() => filterItem("engineering")}
        >
          Engineering
        </li>
        <li
          className={activeCategory === "dockyard" ? "active" : ""}
          onClick={() => filterItem("dockyard")}
        >
          Dockyard
        </li>
        <li
          className={activeCategory === "technology" ? "active" : ""}
          onClick={() => filterItem("technology")}
        >
          Technology
        </li>
      </ul>

      <div className="gallery-container">
        <div className="row">
          {items.map((gallery) => (
            <div className="col-md-6 col-lg-3" key={gallery.id}>
              <SingleProjectGallery gallery={gallery} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryContent;
