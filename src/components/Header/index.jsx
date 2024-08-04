import MegaMenu1 from "../MegaMenu1";
import { Button, Img, Heading } from "../../components";
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-2 relative z-[50]`}>
      <div className="container-xs flex items-start justify-between gap-3 self-end md:p-5 sm:flex-row">
        
      <Link to="/">
          <div className="flex flex-col items-center">
           
                <Img src="images/BihouseDoor_x2.svg" alt="Bihousedoor" className="h-[38px] w-[38px]" />
                <Heading as="h1" className="!font-wellfleet !font-normal !text-white-a700">
                  Adama Homes
                </Heading>
            
          </div>
       </Link>
        <div className="mt-1.5 flex w-[40%] items-center justify-between gap-5 sm:w-full sm:flex-col">
          <ul className="flex items-center gap-14">
            <li>
              <a href="#">
                <Heading size="headingxs" as="p" className="!font-inter !text-w-0">
                  Home
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading size="headingxs" as="p" className="!font-inter !text-w-0">
                  About Us
                </Heading>
              </a>
            </li>
            <li
              onMouseLeave={() => setMenuOpen(false)}
              onMouseEnter={() => setMenuOpen(true)}
            >
              
              <div className="flex cursor-pointer items-center gap-1">
                <Heading size="headingxs" as="p" className="!font-inter !text-w-0">
                  List Your House
                </Heading>

              </div>
              {menuOpen && <MegaMenu1 />}
            </li>

            <li>
                <Link to="/">
                  <button className="min-w-[86px] !rounded-lg font-inter font-semibold">
                  <Img src="images/Ellipse10.jpeg" alt="Arrowdown" className="h-[50px] w-[50px] cursor-pointer rounded-full object-cover" />
                </button>
              </Link>
            </li>
          </ul>
         
         
        </div>
      </div>
    </header>
  );
}
