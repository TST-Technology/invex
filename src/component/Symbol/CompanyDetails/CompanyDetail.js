import React, { useState } from "react";
import moment from "moment";
import marked from "../../Common/Images/marked_img.png";
import unMarked from "../../Common/Images/image4.png";
import abbreviateNumber from "../../Common/NumberFormat";
import PriceChart from "./PriceChart";

function CompanyDetail({ Company, KeyStatus }) {
  const [showBookmark, setShowBookmark] = useState(false);

  const bookmarkToggleHandler = () => {
    setShowBookmark((state) => !state);
  };

  const [showMore, setShowMore] = useState(false);

  const bookmarkClass = `upper ${showBookmark ? "marked" : ""}`;
  return (
    <div className="col-lg-12">
      <div className="card companyviewblk compny_left_detail mb-4">
        <div className="saved-blk">
          <a href="javascript:void(0);">
            <img
              onClick={bookmarkToggleHandler}
              className={bookmarkClass}
              src={showBookmark ? marked : unMarked}
              alt="bookmark"
            />
          </a>
        </div>
        <div className="card-body">
          <div className="logo">
            <div className="img">
              <img
                src={require("../../Common/Images/image1.png").default}
                alt="image"
              />
            </div>
            <div className="title1">
              <h5 className="card-title">{Company?.companyName}</h5>
              <p className="company">{Company?.symbol}</p>
            </div>
          </div>
          <p className="m-0 mt-2">Nasdaq- Real Time Price. Currency in USD</p>
          <div className="sector_industry">
            <span className="badge bg-light text-dark">
              Sector:{Company?.sector}
            </span>
            <span className="badge bg-light text-dark">
              Industry: {Company?.industry}
            </span>
          </div>
          <div className="d-flex mb-5">
            <div className="chart mb-1 mt-2 me-5">
              <div className="chart-text">
                <p
                  className={
                    KeyStatus?.latestPrice > 0
                      ? "card-text up"
                      : "card-text down"
                  }
                >
                  $ {KeyStatus?.latestPrice}
                </p>
                <p
                  className={
                    KeyStatus?.latestPrice > 0 ? "text up" : "text down"
                  }
                >
                  {KeyStatus?.change > 0 ? (
                    <>{KeyStatus?.change}</>
                  ) : (
                    <> {KeyStatus?.change}</>
                  )}{" "}
                  ({KeyStatus?.changePercent}%)
                </p>
              </div>
              <span>
                At close:
                {moment(KeyStatus?.closeTime).format("MMM DD hh:mmA")} EDT
              </span>
            </div>

            {KeyStatus?.extendedPriceTime &&
              KeyStatus?.extendedPriceTime != null && (
                <div className="chart mb-1 mt-2">
                  <div className="chart-text">
                    <p className="card-text border-0 ps-0">
                      ${KeyStatus?.extendedPrice}
                    </p>
                    <p className="text down">
                      {KeyStatus?.extendedChange} (
                      {KeyStatus?.extendedChangePercent}%)
                    </p>
                  </div>
                  <span>
                    After hours:{" "}
                    {moment(KeyStatus?.extendedPriceTime).format(
                      "MMM DD hh:mmA"
                    )}{" "}
                    EDT
                  </span>
                </div>
              )}
          </div>
          <PriceChart />
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;
