import React from "react";
import foodData from "./foodData";
import "./css/FoodCard.css";
const FoodCard = ({ filterData, selectedType }) => {
  const filteredData = foodData?.filter((data) =>{
       const matchingSearch = data.name.toLowerCase().includes(filterData?.toLowerCase());
      const matchingType = selectedType === "All" || selectedType === data.type;

      return matchingSearch && matchingType;

  }

  );
  // console.log("food data", filteredData);
  return (
    <div className="main_container">
      <div className="container ">
        <div className="row gx-4 gy-2">
          {filteredData?.map((data, index) => (
            <>
              <div className="col-lg-4 col-xl-4 " key={index}>
                {/* <div className="card mb-3" style={{ maxWidth: 540 }} key={index}> */}
                <div className="card mb-3 border">
                  <div className=" card_container">
                    <div className="card_col">
                      <div className="food_img">
                        <img
                          src={data?.image}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="card-body">
                        <h5 className="card-title">{data?.name}</h5>
                        <p className="card-text">{data?.text}</p>
                        <span className="badge text-bg-danger">
                          ${data?.price}.00
                        </span>
                        {/* <p className="card-text">{data?.price}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
