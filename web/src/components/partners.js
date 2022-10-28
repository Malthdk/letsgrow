import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Partners = () => (
    <div className="content">
      <h2 className="content-headline">Samarbejdspartnere</h2>
      <div className="content__flex-col content__flex-col--centered content--full-width">
        <div className="content__item content-icon--autow">
        <a href="https://webcrm.com/" target="_blank" rel="noreferrer">
          <div className="content-icon">
          <StaticImage
              src="../images/logo1.jpg"
              height={120}
              alt="web crm"
            />
          </div>
          </a>
        </div>
        <div className="content__item">
        <a href="https://www.futuremanagement.dk/" target="_blank" rel="noreferrer">
        <div className="content-icon content-icon--autow">
        <StaticImage
              src="../images/logo2.png"
              height={120}
              alt="future management"
            />
          </div>
          </a>
        </div>
        <div className="content__item">
          <a href="https://www.videokursus.com/" target="_blank" rel="noreferrer">
        <div className="content-icon content-icon--autow">
        <StaticImage
              src="../images/logo3.jpg"
              height={120}
              alt="videokursus"
            />
          </div>
          </a>
        </div>
        <div className="content__item">
        <a href="https://autobahncph.dk/" target="_blank" rel="noreferrer">
        <div className="content-icon content-icon--autow">
        <StaticImage
              src="../images/autobahn.png"
              height={120}
            />
          </div>
          </a>
        </div>
        <div className="content__item">
        <a href="https://www.vainu.com/" target="_blank" rel="noreferrer">
        <div className="content-icon content-icon--autow">
        <StaticImage
              src="../images/logo5.png"
              height={120}
              alt="vainu"
            />
          </div>
          </a>
        </div>
        <div className="content__item">
        <a href="https://ithuset.dk/" target="_blank" rel="noreferrer">
        <div className="content-icon content-icon--autow">
        <StaticImage
              src="../images/logo6.png"
              height={120}
              alt="it huset"
            />
          </div>
          </a>
        </div>
        <div className="content__item">
        <a href="https://minfranskevinimportor.dk/" target="_blank" rel="noreferrer">
        <div className="content-icon content-icon--autow">
        <StaticImage
              src="../images/vinimportor.png"
              height={120}
              alt="fransk vin importor"
            />
          </div>
          </a>
        </div>
        <div className="content__item">
        <a href="https://aks2tal.com/" target="_blank" rel="noreferrer">
        <div className="content-icon content-icon--autow">
        <StaticImage
              src="../images/aks2tal.jpg"
              height={120}
              alt="aks 2 tal"
            />
          </div>
          </a>
        </div>
      </div>
    </div>
)

export default Partners

