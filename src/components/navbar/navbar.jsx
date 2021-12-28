import * as React from "react";




import BasicSelect from "./select";
import { Link } from "react-router-dom";
import CartWidget from "./cartWidget";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";
import "./navBar.css";

export default function NavBar() {
  const { carr, prods } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  console.log("carr en navbar", carr);
  useEffect(() => {
    if (carr.length > 0 && prods > 0) {
      setLoading(false);
    }
  }, [carr, prods]);

  return (
    <header>
      <nav className="navStyle">
        <div className="logo">
          <Link className="styleBrand" to={"/"}>
            {" "}
            <h2 className="txtLogo">
              {" "}
              <img
                src="https://casafix.000webhostapp.com/Imagenes%20proyecto%20react/logo1i.png"
                alt="logo"
                className="imgLogo"
              />
              CasaFix-Cba{" "}
            </h2>
          </Link>
        </div>

      
      </nav>
      <div>  <div className=" pushRigth">
          {loading ? (
            <div></div>
          ) : (
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          )}
          <BasicSelect />
        </div></div>
    </header>
  );
}
