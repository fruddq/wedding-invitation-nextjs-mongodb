/* eslint-disable react/no-unescaped-entities */
import { PreviousAndNextBtn } from "./previousAndNextBtn"
import "./styles/theBigDay.scss"

export default function TheBigDay() {
  return (
    <section className="container">
      <div className="big-day-wrapper">
        <h1>The big day!</h1>
        <article className="evening-info">
          <p>
            Our evening will commence with a selection of hors d'oeuvres,
            followed by a main dish and a mouthwatering cake for dessert. Each
            course will be thoughtfully paired with fine wines. Rest assured,
            our vegetarian guests will be catered to with equally delectable
            alternatives.
          </p>
          <p>
            The enchanting atmosphere will be accentuated by the soothing
            melodies of music, providing a harmonious backdrop for shared
            laughter and cherished moments. <br />
          </p>
          <p>
            Please understand that this gathering is exclusively for adults, and
            we kindly request that children not be in attendance.
          </p>
          <p>
            We eagerly anticipate the pleasure of your company, and we are
            committed to ensuring that this special evening becomes an indelible
            memory for us all!
          </p>
        </article>
      </div>
    </section>
  )
}
