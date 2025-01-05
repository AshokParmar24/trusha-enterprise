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
        src="https://www.google.com/maps/embed?pb=@21.163697,72.8124587,3a,75y,308.19h,92.57t/data=!3m7!1e1!3m5!1sdSBaBCY9FYL5OtHAPy6p3A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-2.5661610052815718%26panoid%3DdSBaBCY9FYL5OtHAPy6p3A%26yaw%3D308.18734445886554!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
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