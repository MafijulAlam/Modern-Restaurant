import React from 'react';
import './subheading.css';
import images from '../../constants/images';
const SubHeading = ({ title }) => (
  <div className="app_subHeading">
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
