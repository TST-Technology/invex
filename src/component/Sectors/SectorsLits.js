import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getAllSectors } from "../api/sectors";

const SectorsList = ({ setSectorId , setIndustryId, getAllSectorsData }) => {

  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState();
  const [subActiveItem, setSubActiveItem] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true)
      var res = await getAllSectors()
      if (res && res?.status == 200 && res?.data?.length > 0) {
        setSectors(res.data)
      }
      setLoading(false)
    })()
  }, [])

  const checkActiveItems = (index,secId) =>{
    setIndustryId()
    setSubActiveItem()
    if(secId){
      setSectorId(secId);
    }
    if(activeItem !== index){
      setActiveItem(index)
    }else{
      setActiveItem()
    }
  }

  const checkSubItemsActive = (sub,indId) =>{
    if(indId) {
      setIndustryId(indId)
    }
    if(subActiveItem !== sub){
      setSubActiveItem(sub)
    }else{
      setSubActiveItem()
    }
  }

  return (
    <div className="col-lg-4">
      <div className="leftsidefilter">
        <div className="new_scenr_btn">
          <h4 className="m-0 c-pointer" role="button" onClick={()=>
            {
              checkActiveItems()
              getAllSectorsData()}}>All Sectors</h4>
        </div>
        <div className="accordion" id="acc_sidefilter">
          {loading && <div style={{ height: 110, padding:30, textAlign: 'center' }}>
              <div colSpan={6} style={{ textAlign: 'center' }}><CircularProgress size={50} /></div>
          </div>}
          {!loading && sectors && sectors.length > 0 && sectors.map((items, i) => {
            return (
              <div key={i} className="in_acc_item">
                <h2 className="in_acc_header" id="acc_industries">
                  <button className={"accordion-button" + (activeItem == i ? ' active ' : ' collapsed ')} onClick={()=>checkActiveItems(i,items.id)}>
                    <span className="d-block w-100">
                      {items.name}
                      <a className="float-end me-3 pe-3 text-secondary">
                        {items.SectorWiseIndustries.length > 0 && items.SectorWiseIndustries.length + ' Industries'} 
                      </a>
                    </span>
                  </button>
                </h2>
                <div id="coll_industries" className={"accordion-collapse collapse" + (activeItem == i ? 'show' : '')}>
                  <div className="in_acc_body">
                    <ul>
                      {items.SectorWiseIndustries.length > 0 && items.SectorWiseIndustries.map((sub,key)=>{
                        return(
                          <li key={key} className={subActiveItem == sub.name ? 'active' : ''}>
                            <a href="javascript:void(0);" onClick={()=>checkSubItemsActive(sub.name,sub.id)}>
                              {sub.name}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default SectorsList;
