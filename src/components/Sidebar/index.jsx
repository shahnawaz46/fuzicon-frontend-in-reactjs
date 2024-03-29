import React, { useState } from 'react';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import './style.css';

const SideBar = ({ subCategory, urlSlug }) => {
  const [category, setCategory] = useState(false);
  return (
    <>
      <div>
        <h2>Filters</h2>
      </div>
      {/* desktop sub-category */}
      {/* <div className="desktop-category-container">
        {subCategory.map((value, index) => (
          <NavLink
            to={`/collections/${urlSlug}/${value.slug}`}
            key={index}
            className="category-options"
            // activeClassName="men-category-activeclass"
            onClick={() => setCategory(false)}
          >
            {value.categoryName}
          </NavLink>
        ))}
      </div> */}

      {/* mobile sub-category */}
      {/* <div className="mobile-category-container">
        <div className="men-category-button-box">
          <button className="men-category-button">{urlSlug}</button>
          <div className="men-category-drop-down">
            <IoMdArrowDropright style={{fontSize:'22px'}} onClick={()=>setCategory(true)} />
          </div>
        </div>

        <div
          className={
            category
              ? "men-category-mobile-option-box category-show"
              : "men-category-mobile-option-box"
          }
        >
          {subCategory.map((value, index) => (
          <NavLink
            to={`/collections/${urlSlug}/${value.slug}`}
            key={index}
            className="category-options"
            // activeClassName="men-category-activeclass"
            onClick={() => setCategory(false)}
            style={{padding:'14px 0px'}}
          >
            {value.categoryName}
          </NavLink>
        ))}
          <div className="men-category-drop-up">
            <IoMdArrowDropleft style={{fontSize:'22px'}} onClick={() => setCategory(false)} />
            <AiOutlineArrowLeft />
          </div>
        </div>
      </div>   */}
    </>
  );
};

export default React.memo(SideBar);
