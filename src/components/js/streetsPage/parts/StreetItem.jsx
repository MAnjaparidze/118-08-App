import React, { useState } from "react";
import RepeatIco from "../../../../assets/img/icons/repeat.png";

import MoreIcon_Blk from "../../../../assets/img/more.png";
import PinIcon from "../../../../assets/img/map-pin.png";

import CloseIcon from "../../../../assets/img/x-icon.png";

export default function StreetItem({ streetItem }) {
  const [moreActive, setMoreActive] = useState(false);

  return (
    <>
      <div className={moreActive ? 'street-item-basic-info street-item-basic--active' : 'street-item-basic-info'}>
        <img className='street-item-more-btn' src={MoreIcon_Blk} alt="" />
        <div className="content-item-left">
          {streetItem.name ? streetItem.name : null}
        </div>
        {/* <div className="content-item-center">
        {streetItem.name_old ? streetItem.name_old : null}
      </div>
      <div className="content-item-center">
        {streetItem.district_name ? streetItem.district_name : null}
      </div> */}
        {moreActive ? (
          <div className="content-item-center">
            {" "}
            {streetItem.district_name ? streetItem.district_name : null}
          </div>
        ) : (
          <img className="street-item-pin" src={PinIcon} alt="" />
        )}
        <div className={moreActive ? "content-item-right content-item-right--active" : "content-item-right"}>
          <div className={moreActive ? "item-post-code item-post-code--active" : "item-post-code"}>
            {moreActive ? (
              <img src={CloseIcon} alt=''></img>
            ) : (
              <span>{streetItem.zip ? streetItem.zip : null}</span>
            )}
            {/* <img src={RepeatIco} alt="" /> */}
          </div>
        </div>
      </div>
      {moreActive && <div className={moreActive ? 'street-item-more-info street-item-more--active' : 'street-item-more-info'}>
        <span>ძველი სახელწოდება</span>
        <span>{streetItem.name_old ? streetItem.name_old : null}</span>
      </div>}
    </>
  );
}
