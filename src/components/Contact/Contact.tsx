import tapeIcon from "../../assets/icons/tape.svg";
import "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <img
        className="contact__tape-icon contact__tape-icon--left"
        src={tapeIcon}
        alt="tape icon"
      />
      <img
        className="contact__tape-icon contact__tape-icon--right"
        src={tapeIcon}
        alt="tape icon"
      />

      <h2 className="contact__title">Let's Connect!</h2>
      <p className="contact__info">
        I'm always open to new opportunities, feel free to reach out:{" "}
        <a href="mailto:marisonfdrp@gmail.com">marisonfdrp@gmail.com</a>
      </p>
    </section>
  );
};

export default Contact;
