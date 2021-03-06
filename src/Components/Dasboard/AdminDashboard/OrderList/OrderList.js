import React from "react";
import "./OrderList.css";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import OrderListMain from "./OrderListMain/OrderListMain";

const OrderList = () => {
  return (
    <section className="dashboard">
      <div className="">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-10 p-0">
            <OrderListMain />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
