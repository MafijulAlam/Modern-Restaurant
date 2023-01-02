import React from 'react';
import './SpecialMenu.css';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title={'Menu that fits you palatte'} />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((item, ind) => (
            <MenuItem
              key={ind + item.price}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((item, ind) => (
            <MenuItem
              key={ind + item.price}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="button">
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
