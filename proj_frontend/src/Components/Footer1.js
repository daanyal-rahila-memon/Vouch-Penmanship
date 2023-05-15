import React, { useState } from "react";

import "../CSS/Footer1.css";
function Footer1()
{
    return(
        <div>
    
    <footer className="footer-distributed">

        <div className="footer-left">
            <h3>Vouch<span>Penmanship</span></h3>

            <p className="footer-links">
                <a href="/Footer1">Home&nbsp;</a>
                |
                <a href="/gallery"> &nbsp;Gallery&nbsp;</a>
                |
                <a href="/manuscript">&nbsp; ManuScript&nbsp;</a>
                |
                <a href="/ideas">&nbsp; Ideas</a>
            </p>

            <p className="footer-company-name" style={{fontSize:"18px"}}>Copyright © 2023 <strong>Vouch Penmanship</strong> All rights reserved</p>
        </div>

        <div className="footer-center">
            <div >
                <i className="fa fa-map-marker"></i>
                <p><span style={{fontSize:"18px"}}>Faisalabad</span>
                    Pakistan</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+92 3494734586</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:sagar00001.co@gmail.com">vouchpenmanship@gmail.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about" style={{fontSize:"18px"}}>
                <span>About the Website</span>
                <strong>It saves your patents</strong> in the form of NFT, to save your intellectual Property
                as digital assert.
            </p>
            <div className="footer-icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
            </div>
        </div>
    </footer>


    </div>
        )
    };
    export default Footer1