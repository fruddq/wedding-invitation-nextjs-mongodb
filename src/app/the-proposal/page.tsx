import Image from "next/image";
import "./style.scss";

export default function ProposalPage() {
  return (
    <>
      <section className="wrapper">
        <h1>Frudd proposed</h1>
        <p>
          On august 3rd 2023, <br /> Frudd got down on one knee in the restaurant Spagio
          infront of the Balliagio fountain and asked Nani to marry him... and she said yes!
        </p>
      </section>
      <Image
        className="hide-mobile"
        src="/proposal-people 1.png"
        alt="Champagne glass with popped champagne bottle"
        width={500}
        height={750}
      />
    </>
  );
}
