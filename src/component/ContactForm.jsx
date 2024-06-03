import './../assets/css/Form.css';
export default function ContactForm() {
  return (<div className="container border-black border-2 rounded-3xl">
  <form id="contact" action="" method="post">
    <h3>Contact us</h3>
    <h4>Contact us today, and get reply as soon as possible!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabIndex="1" required autoFocus />
    </fieldset>
    <fieldset>
      <input placeholder="example@bsdc.ac.uk" type="email" tabIndex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number for fast reply" type="tel" tabIndex="3"/>
    </fieldset>
    <fieldset>
      <input placeholder="Reason for Inquire" type="text" tabIndex="4" required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabIndex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
  );
}