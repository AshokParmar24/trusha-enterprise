// components/Map.js

import React from "react";


const Maps = () => {
  
const MapStyle = {
  width: "100%",
  height: "400px",
};
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
        width={MapStyle.width}
        height={MapStyle.height}
        aria-hidden="false"
        tabIndex="0"
        title="Humanity First Indonesia"
      />
    </div>
  );
};

export default Maps