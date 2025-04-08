import "./Home.scss";
import profile from "../../assets/images/profile.jpg";

function Home() {
  return (
    <section className="home">
      <div className="home__card">
        <img src={profile} alt="Marison" className="home__avatar" />
        <h1 className="home__name">const Marison = "Full-Stack Developer";</h1>
        <p className="home__bio">
          Hi, I'm Marison, a Software Engineer with a background in Health
          Sciences. I grew an interest in tech when I realized I could bring any
          idea to life. I was always artistic growing up, but somewhere along
          the way, I lost that spark. Coding has helped me reconnect with that
          side of myself, and that's why I love what I do.
          <br />
          Thanks for stopping by!ㅤ♡
        </p>
      </div>
    </section>
  );
}

export default Home;
