import React, { useEffect } from 'react';

const Ad = ({ client, slot, format = "auto", style = {} }) => {
  useEffect(() => {
    // Trigger the adsbygoogle refresh
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="adsense-ad-container" style={style}>
      <ins 
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
      ></ins>
    </div>
  );
};

export default Ad;
