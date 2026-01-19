import React from "react";

const GoogleMap = ({ address }) => {
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <iframe
        src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="w-full h-64"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
