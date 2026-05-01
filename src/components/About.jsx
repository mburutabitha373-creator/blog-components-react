function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

About.defaultProps = {
  image: "default-logo.png",
};

export default About;