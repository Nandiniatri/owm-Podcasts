import React from "react";
import "./GuestCuratorCard.css";
import Image from "../../component/Image";

const GuestCuratorCardFile = ({ data }) => {
  return (
    <div className="guestCurator-Main-Container">
      {data && data.map((item) => {
        return (
          <div className="guestCurator-inner-Container">
            
            <div key={item.id} className="guestCurator-inner-div1">
              <Image src={item.image} />
            </div>

            <div className="guestCurator-inner-div2">
              <div className="guestCurator-inner-div2-title-div">
                <p>{item.title}</p>
                <span><a href={item.link}>{item.linkTitle}</a></span>
              </div>

              <div className="guestCurator-name">{item.subTitle}</div>
              <div className="guestCurator-description">{item.content}</div>
            </div>

            <div className="guestCurator-inner-div3">
              <Image src={item.guestCurImg} />
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default GuestCuratorCardFile;
