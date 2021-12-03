import React from "react";
import sidebarData from "./NewsSidebarData.json";

console.log("Sidebar Data ", sidebarData);

const News = () => {
  return (
    <div class="main">
      <section class="profile_page wishlist_section news_sec">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-4">
              <div class="profile_sidebar">
                <div class="top_links">
                  <div class="top_listing">
                    <div class="top_profile mb-4 mt-2">
                      {/* <img src="assets/images/profile_1.png" class="img-fluid" alt="user profile"> */}
                      <h3>Mr. May</h3>
                    </div>
                    <ul>
                      {sidebarData.map((sideItem) => {
                        const iconClass = sideItem.iconClass || "";
                        const label = sideItem.listItemName || "";
                        const sidebarLink = sideItem.link || "#";
                        return (
                          <li>
                            <a href={sidebarLink}>
                              <i class={iconClass}></i> {label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <i class="bi bi-box-arrow-in-right"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-md-8">
              <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="news_block mb-3">
                    <div class="news_img">
                      {/* <a href="javascript:void(0);"><img src="assets/images/news-11.png" class="img-fluid" alt="news_image"></a> */}
                    </div>
                    <div class="news_content">
                      <a href="javascript:void(0);" class="text-dark">
                        <h5>
                          Lucid shares soar on news of first electric sedan
                          deliveries
                        </h5>
                      </a>
                      <a href="javascript:void(0);" class="text-primary">
                        Business
                      </a>
                      <span> · Money Wise</span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="news_block mb-3">
                    <div class="news_img">
                      {/* <a href="javascript:void(0);"><img src="assets/images/news-14.png" class="img-fluid" alt="news_image"></a> */}
                    </div>
                    <div class="news_content">
                      <a href="javascript:void(0);" class="text-dark">
                        <h5>
                          Lucid shares soar on news of first electric sedan
                          deliveries
                        </h5>
                      </a>
                      <a href="javascript:void(0);" class="text-primary">
                        Business
                      </a>
                      <span> · Money Wise</span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="news_block mb-3">
                    <div class="news_img">
                      {/* <a href="javascript:void(0);"><img src="assets/images/news-15.png" class="img-fluid" alt="news_image"></a> */}
                    </div>
                    <div class="news_content">
                      <a href="javascript:void(0);" class="text-dark">
                        <h5>
                          Lucid shares soar on news of first electric sedan
                          deliveries
                        </h5>
                      </a>
                      <a href="javascript:void(0);" class="text-primary">
                        Business
                      </a>
                      <span> · Money Wise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
