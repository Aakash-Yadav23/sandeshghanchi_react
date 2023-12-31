
import img from "../public/img.jpeg"
import React from 'react'

const MagazineData = () => {
  return (
  
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="shadow overflow-hidden rounded-lg">
          <div className="img__main__container ">
            <a href="#">
              <img
                alt="Placeholder"
                className="block h-[550px] w-full p-5  img__radius"
                src={img}
              />
            </a>
          </div>
        </article>
      </div>
  )
}

export default MagazineData