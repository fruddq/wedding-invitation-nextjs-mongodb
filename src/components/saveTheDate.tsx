import { PreviousAndNextBtn } from "./previousAndNextBtn";
import "./styles/saveTheDate.scss";
import Image from "next/image";

export default function SaveTheDate() {
  return (
    <>
      <section className="wrapper-savedate">
        <Image
          className="savedate-img"
          src="/save-the-date.png"
          alt="Two people with a save the date banner"
          width={320}
          height={300}
        />
        <article className="info">
          <div className="info-date">
            <div className="info-day">
              <h3>
                Saturday
                <br /> <span>16:00-00:00</span>
              </h3>
            </div>
            <hr />
            <p className="info-month">
              June <br /> <span>29th</span>
            </p>
            <hr className="info-hr" />
            <div className="info-year-container">
              <p className="info-year">2024</p>
            </div>
          </div>
          <div className="info-address">
            <p>
              Music restaurang, <br />
              Hemvärnsgatan 15, Solna Strand
            </p>
            <p>Parking available outside</p>
          </div>
        </article>
        <article>
          <PreviousAndNextBtn />
        </article>
      </section>
    </>
  );
}
