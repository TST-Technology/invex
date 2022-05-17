import React from 'react'

const IndustryTags = ({ Company }) => {
  return (
    <div className="card companyviewblk industrytags_block mb-4">
      <div className="card-body">
        <h5 className="mb-4"><strong>Industry Tags</strong></h5>
        <div className="sector_industry">

          {Company?.tags && Company?.tags.map((tag) => {
            return (
              <span className="badge bg-light text-dark">
                {tag}
              </span>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default IndustryTags