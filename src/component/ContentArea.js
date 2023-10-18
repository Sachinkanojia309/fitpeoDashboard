import React from "react";
import "./ContentArea.scss";
import { BsSearch } from "react-icons/bs";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {TbReportAnalytics} from "react-icons/tb";
import {LiaWalletSolid} from "react-icons/lia";
import {BsHandbag} from "react-icons/bs";
// import BarChart from "./barchart";
// import BarChartGraph from "./BarChartGraph";
import BarChartGraph from "./BarChartGraph";
import Chakara from "./Chakara";
import ProductTable from "./ProductTable ";
import productimg from './../images/profile.png'

const products = [
  {
    image: productimg,
    name: 'Product 1',
    stock:"32 in stock",
    price: 19.99,
    totalsale:32,
  },
  {
    image: productimg,
    name: 'Product 2',
    stock:"36 in stock",
    price: 29.99,
    totalsale:36,
  },
  // Add more products as needed
];

const ContentArea = () => {
  return (
    <section className="main">
      <div className="header1">
        <div className="greet">
          <h1> Hello Shahrukh,</h1>
        </div>
        <div className="search_main_block">
          <label className="search-field">
            <BsSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </label>
        </div>
      </div>
      <div className="content1">
        <div className="earn-div">
          <div className="avatar1" style={{backgroundColor: "rgb(217, 238, 219)"}}>
          <AiOutlineDollarCircle className="img" style={{color: "green"}}/>
          </div>
          <div className="earn-info">
            <p style={{ marginTop: "30px", fontSize: "15px" }}>Earning</p>
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>$198K</p>
            <p style={{ fontSize: "11px" }}>
              <span style={{ color: "green", fontWeight: "bold"}}>10%</span>{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>&#8593;</span> this month
            </p>
          </div>
        </div>
        <div className="earn-div">
        <div className="avatar1" style={{backgroundColor: "#dfb9df"}}>
          <TbReportAnalytics className="img" style={{color: "purple"}}/>
          </div>
          <div className="earn-info">
            <p style={{ marginTop: "30px", fontSize: "15px" }}>Orders</p>
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>$2.4K</p>
            <p style={{ fontSize: "11px" }}>
              <span style={{ color: "red", fontWeight: "bold"}}>2%</span>{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>&#8595;</span> this month
            </p>
          </div>
        </div>
        <div className="earn-div">
        <div className="avatar1" style={{backgroundColor: "#caeee2"}}>
          <LiaWalletSolid className="img" style={{color: "blue"}}/>
          </div>
          <div className="earn-info">
            <p style={{ marginTop: "30px", fontSize: "15px" }}>Balance</p>
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>$2.4K</p>
            <p style={{ fontSize: "11px" }}>
              <span style={{ color: "red", fontWeight: "bold"}}>2%</span>{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>&#8595;</span> this month
            </p>
          </div>
        </div>
        <div className="earn-div">
        <div className="avatar1" style={{backgroundColor: "#f7dde1"}}>
          <BsHandbag className="img" style={{color: "red"}}/>
          </div>
          <div className="earn-info">
            <p style={{ marginTop: "30px", fontSize: "15px" }}>Total Sales</p>
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>$89K</p>
            <p style={{ fontSize: "11px" }}>
              <span style={{ color: "green", fontWeight: "bold"}}>11%</span>{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>&#8593;</span> this month
            </p>
          </div>
        </div>
      </div>
      <div className="content2">
        <div className="bar">
        <BarChartGraph/>
        </div>
        <div className="chakara">
          <Chakara/>
        </div>
      </div>
      <div className="content3">
        <div className="product_tables">
        <ProductTable products={products} />
        </div>
      </div>
    </section>
  );
};

export default ContentArea;
