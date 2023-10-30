import "./style.scss";
import Image from "next/image";

import next from "next";

export default function Info() {
  return (
    <>
      <h1>
        Admin
        <span>
          <button className="logout-btn">Logout</button>
        </span>
      </h1>
      <section className="wrapper">
        <article>
          <button>+ Create event</button>
        </article>
        <article className="current-events">
          <h2>Current events</h2>
          <ul>
            <li>
              current event
              <div className="icons">
                <Image src="edit-icon.svg" alt="Trash can icon" width={30} height={30} />
                <Image src="trash-can.svg" alt="Trash can icon" width={30} height={30} />
              </div>
            </li>
          </ul>
        </article>
        <article className="past-events">
          <h2>Past events</h2>
          <ul>
            <li>
              past event
              <div className="icons">
                <Image src="preview-icon.svg" alt="Trash can icon" width={30} height={30} />
                <Image src="trash-can.svg" alt="Trash can icon" width={30} height={30} />
              </div>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
