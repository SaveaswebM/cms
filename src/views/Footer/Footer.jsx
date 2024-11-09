import React from "react";
import { Image } from "react-bootstrap";
import whatsappIcon from "../../assets/images/whatsapp-icon.png";
export default function Footer() {
  return (
    <>
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/+919309152043?text=Hello,+hi+i+want+to+discuss+on+my+project"
          target="_blank"
        >
          <img width={60} height={60} src={whatsappIcon}></img>
        </a>
      </div>
    </>
  );
}
