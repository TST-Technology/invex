import React from "react";
import manufacturingDataTable from "./non_manufacture_table.json";
import comments from "./comments.json";
import star from "../Common/Images/star-round.svg";
import chart from "../Common/Images/industrial_chart.png";

const NonManufacture = () => {
  return (
    <div>
      <section class="ism_non_manfuc">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mb-5">
              <div class="card mb-5">
                <div class="card-body bg-base d-lg-flex d-md-flex d-block align-items-center rounded-3 p-4">
                  <h5 class="m-0 pe-3">ISM Report On Business</h5>
                </div>
              </div>

              <div class="card companyviewblk compprofile_block mb-5">
                <div class="card-header">
                  <div class="d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0">
                    <h6 class="m-0">
                      <strong>June 2021 Non-Manufacturing</strong>
                    </h6>
                  </div>
                </div>
                <div class="card-body">
                  <div class="description-para">
                    <div class="key_status">
                      <p className="mb-4">
                        The ISM manufacturing index, also known as the
                        purchasing managers' index (PMI), is a monthly indicator
                        of U.S. economic activity based on a survey of
                        purchasing managers at more than 300 manufacturing
                        firms. It is considered to be a key indicator of the
                        state of the U.S. economy. Formally called the
                        Manufacturing ISM Report on Business, the survey is
                        conducted by the Institute for Supply Management (ISM).
                        It indicates the level of demand for products by
                        measuring the amount of ordering activity at the
                        nation's factories. The ISM Manufacturing Index is one
                        of the most important leading indicators in the world
                        for Professional Traders and portfolio Managers. This is
                        because historically, the ISM predicts US GDP with a 12
                        month time lags with 85% accuracy.
                      </p>
                      <p>
                        There are ranks for each component of the ISM reports
                        and the overall numbers. The sectors are ranked each
                        month, where a growth sector has a positive number and a
                        contraction sector has a negative number.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h6 class="mb-4">
                <strong>Last 6 month Non-Manufacturing</strong>
              </h6>
              <div class="table-responsive">
                <table class="table table-bordered m-0 most_tables">
                  <thead class="table-light">
                    <tr>
                      <th scope="col">ISM Manufacturing</th>
                      <th scope="col">Dec (2020)</th>
                      <th scope="col">Jan (2021)</th>
                      <th scope="col">Feb (2021)</th>
                      <th scope="col">Mar (2021)</th>
                      <th scope="col">Apr (2021)</th>
                      <th scope="col">May (2021)</th>
                    </tr>
                  </thead>
                  <tbody class="border-top-0">
                    {manufacturingDataTable.map((manuData) => {
                      const itemName = manuData["item-type"] || "",
                        jan = manuData.Jan || "0 (0%)",
                        feb = manuData.Feb || "0 (0%)",
                        mar = manuData.Mar || "0 (0%)",
                        apr = manuData.Apr || "0 (0%)",
                        may = manuData.May || "0 (0%)",
                        dec = manuData.Dec || "10 (100%)";
                      return (
                        <tr>
                          <td>{itemName}</td>
                          <td class="up">
                            {dec}
                            <span class="arw-up"></span>
                          </td>
                          <td class="up">
                            {jan}
                            <span class="arw-up"></span>
                          </td>
                          <td class="up">
                            {feb}
                            <span class="arw-up"></span>
                          </td>
                          <td class="up">
                            {mar}
                            <span class="arw-up"></span>
                          </td>
                          <td class="up">
                            {apr}
                            <span class="arw-up"></span>
                          </td>
                          <td class="up">
                            {may}
                            <span class="arw-up"></span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div class="d-flex align-items-center justify-content-between mt-3">
                  <small>Formate: Rank (Persentile)</small>
                  <small>
                    *The above ranking is derived from the last 6 months of data
                    provided by the Institute for the Supply Management(ISM).
                  </small>
                </div>
              </div>
              <div class="last-six-non-manf mt-5 mb-5">
                <h6 class="mb-4">
                  <strong>Last 6 month Non-Manufacturing</strong>
                </h6>
                <div class="text-center">
                  <img src={chart} class="img-fluid" alt="chart" />
                </div>
                <p>
                  <small>
                    *On the basis of this report of the last six month the top 3
                    industries which expects growth are the 1) Electrical
                    Equipment, Appliances & Components, 2) Machinery & 3)
                    Textile Mills and the industries which expects contraction
                    are the 1) Printing & Related Support Activities, 2)
                    Petroleum & Coal Products .
                  </small>
                </p>
              </div>
              <div class="card companyviewblk compprofile_block mb-5">
                <div class="card-header">
                  <div class="d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0">
                    <h6 class="m-0">
                      <strong>Analyst Comments</strong>
                    </h6>
                  </div>
                </div>
                <div class="card-body">
                  <div class="anay_comments_sec">
                    {comments.map((comment) => {
                      return (
                        <>
                          <div>
                            <img src={star} class="img-fluid" alt="star" />
                            <h6 class="d-inline-flex ms-2">{comment.title}</h6>
                            <p class="m-0">{comment.desc}</p>
                          </div>
                          <div class="border mt-4 mb-4"></div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="mt-3 mb-5">
                <h6 class="mb-3">
                  <strong>Check previous statics</strong>
                </h6>
                <div class="key_status">
                  <ul class="check_prev_statc">
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        April 2021 Manufacturing ISM Report On Business.
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        March 2021 Manufacturing ISM Report On Business.
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        February 2021 Manufacturing ISM Report On Business.
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        January 2021 Manufacturing ISM Report On Business.
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-primary">
                        December 2021 Manufacturing ISM Report On Business.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NonManufacture;
