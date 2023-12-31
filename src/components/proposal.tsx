import Image from "next/image";
import "./styles/proposal.scss";

export default function Proposal() {
  return (
    <div className="container-proposal">
      <section className="wrapper-proposal-left">
        <div className="proposal-info">
          <h1 className="proposal-title">Frudd proposed</h1>
          <div className="proposal-wrapper">
            <p className="proposal-text top-border">
              On August 3rd, 2023, at the enchanting Spagio restaurant in Las Vegas, against
              the backdrop of the majestic Bellagio fountain.
            </p>
            <p className="proposal-text">
              Before dessert arrived, in a moment filled with anticipation, Frudd knelt down
              on one knee and asked Nani the most important question of his life —
              &apos;Will you marry me?&apos;
            </p>
            <p className="proposal-text bottom-border">
              Stunned and choked with emotion, she responded with a heartfelt
              &apos;Yes!&apos;
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper-proposal-right">
        <Image
          className="hide-mobile"
          src="/proposal-people 1.png"
          alt="Champagne glass with popped champagne bottle"
          width={500}
          height={500}
        />
      </section>
    </div>
  );
}
