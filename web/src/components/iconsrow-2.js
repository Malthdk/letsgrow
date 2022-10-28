import * as React from "react"
import DataIcon from "../svg/data-icon.svg";
import PayIcon from "../svg/pay-icon.svg";
import PresentationIcon from "../svg/presentation-icon.svg";
import ScheduleIcon from "../svg/schedule-icon.svg";


const IconsRowTop = () => (
    <div className="content offer">
      <h2 className="content-headline">Typisk udbytte pr måned</h2>
      <div className="content__flex-col">
        <div className="content__item">
        <div className="w-[120px] h-[120px] rounded-full bg-[#f5f4f0] m-auto flex items-center justify-center text-2xl">
          10 - 12
          </div>
          <div className="mt-4">
          Møder           
          </div>
        </div>
        <div className="content__item">
        <div className="w-[120px] h-[120px] rounded-full bg-[#f5f4f0] m-auto flex items-center justify-center text-4xl">
          16%
          </div>
          <div className="mt-4">
          Konvertering           
          </div>
        </div>
        <div className="content__item">
        <div className="w-[120px] h-[120px] rounded-full bg-[#f5f4f0] m-auto flex items-center justify-center text-4xl">
          8+
          </div>
          <div className="mt-4">
          Varme leads           
          </div>
        </div>
        <div className="content__item">
        <div className="w-[120px] h-[120px] rounded-full bg-[#f5f4f0] m-auto flex items-center justify-center text-4xl">
          75%
          </div>
          <div className="mt-4">
          Reply rate   
          </div>
        </div>
    </div>
    </div>
)

export default IconsRowTop

