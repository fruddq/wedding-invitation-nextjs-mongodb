import "./styles/additional-info.scss";

export default function AdditionalInfo() {
  return (
    <>
      <section className="wrapper-additionalinfo">
        <article className="gift">
          <h1 className="additional-title">Gifting</h1>
          <div className="gift-info">
            <p className="additional-text">
              If you wish to offer us a gift on our special day, we would be grateful for a
              contribution toward our upcoming honeymoon. Your thoughtful gesture will help
              make our post-wedding getaway even more memorable. Your presence is the
              greatest present, and any contribution is sincerely appreciated
            </p>
            <p className="additional-text">
              Please contact our toastmaadame or toastmaster for more details.
            </p>
          </div>
        </article>
        <article className="speech">
          <h1 className="additional-title">Speech? Performance?</h1>
          <div className="speech-info">
            <p className="additional-text">
              We would be truly honored if you would like to contribute a speech or share a
              performance number during our reception. To make sure everything goes
              smoothly, please inform our Toastmadame or Toastmaster in advance.
            </p>
            <p className="additional-text">
              Your participation will add a special touch to our celebration, and we
              appreciate your thoughtful involvement in making our day memorable
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
