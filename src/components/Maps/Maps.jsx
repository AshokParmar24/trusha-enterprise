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
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d441.0616775523826!2d70.87133326654764!3d22.807348879821618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d22.807411899999998!2d70.8717765!4m3!3m2!1d22.8073649!2d70.8717407!5e1!3m2!1sgu!2sin!4v1736780090703!5m2!1sgu!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Maps;
