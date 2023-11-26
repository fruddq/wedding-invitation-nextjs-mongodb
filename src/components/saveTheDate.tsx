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
          width={420}
          height={400}
        />
        <article className="info-save-the-date">
          <div className="info-date">
            <div className="info-day">
              <h3 className="info-day-title">
                Saturday
                <br /> <span className="info-span">16:00-00:00</span>
              </h3>
            </div>
            <hr className="info-hr" />
            <p className="info-month">
              June <br /> <span className="info-span">29th</span>
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
      </section>
    </>
  );
}
