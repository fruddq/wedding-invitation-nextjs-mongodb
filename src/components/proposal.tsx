import Image from "next/image"
import "./styles/proposal.scss"
import { PreviousAndNextBtn } from "./previousAndNextBtn"

export default function Proposal() {
  return (
    <div className="container-proposal">
      <section className="wrapper-proposal-left">
        <div className="info">
          <h1>Frudd proposed</h1>
          <p>
            On august 3rd 2023, <br /> Frudd got down on one knee in the
            restaurant Spagio infront of the Balliagio fountain and asked Nani
            to marry him... and she said yes!
          </p>
        </div>
      </section>
      <section className="wrapper-proposal-right">
        <Image
          className="hide-mobile"
          src="/proposal-people 1.png"
          alt="Champagne glass with popped champagne bottle"
          width={400}
          height={400}
        />
      </section>
    </div>
  )
}
