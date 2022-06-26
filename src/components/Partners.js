import React from "react";
import "./Partners.css";

function Partners() {
  return (
    <div className="partners">
      <hr />
      <div className="partners__images">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"
          alt="partner"
          width="120px"
        />
        <img
          src="https://64.media.tumblr.com/f1bd3cd7e4b20dba634393462326859b/tumblr_inline_pcdui455cU1r8ovh1_540.png"
          alt="partner"
          width="150px"
        />
        <img
          src="https://images.ctfassets.net/00atxywtfxvd/2MlqAOzmHjSPtssv6HlNox/1cb35b40775835a5f574ebc5509907a1/coursera-wordmark-blue.svg"
          alt="partner"
          width="120px"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Udacity_logo.svg/1280px-Udacity_logo.svg.png"
          alt="partner"
          width="120px"
          height="30px"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kadenze_logo.svg/1280px-Kadenze_logo.svg.png"
          alt="partner"
          width="120px"
        />
      </div>
      <hr />
    </div>
  );
}

export default Partners;
