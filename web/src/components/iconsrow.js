import * as React from "react"
import DataIcon from "../svg/data-icon.svg";
import PayIcon from "../svg/pay-icon.svg";
import PresentationIcon from "../svg/presentation-icon.svg";
import ScheduleIcon from "../svg/schedule-icon.svg";


const IconsRow = () => (
    <div className="content offer">
      <h2 className="content-headline">Din vækstpakke kan inkludere</h2>
      <div className="content__flex-col">
        <div className="content__item">
        <div className="content-icon">
          <a href="#modebooking">
            <ScheduleIcon />
            </a>
          </div>
          <div className="content-headline content__icon-description">
          Mødebooking           
          </div>
        </div>
        <div className="content__item">
          <div className="content-icon">
          <a href="#salgsproces">
              <PresentationIcon />
              </a>
          </div>
          <div className="content-headline content__icon-description">
          Effektiv salgsproces
          </div>
        </div>
        <div className="content__item">
        <div className="content-icon">
        <a href="#crm">
            <PayIcon />
            </a>
          </div>
          <div className="content-headline content__icon-description">
          Kundestyringssystem (CRM)           
          </div>
        </div>
        <div className="content__item">
        <div className="content-icon">
          <a href="#markedsdata">
            <DataIcon />
            </a>
          </div>
          <div className="content-headline content__icon-description">
            Unik markedsdata
          </div>
      </div>
    </div>
    </div>
)

export default IconsRow

