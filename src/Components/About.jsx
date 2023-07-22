/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "ALPHA - Microsoft LSA ⭐ || Technical Executive - Microsoft Learn Student Ambassadors, KIIT Chapter || AI-ML Developer - Geeks For Geeks, KIIT Chapter || Harvard HPAIR '23 ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine Learning",
  "Python Programming",
  "C++ Programming",
  "DSA",
  "Data Science",
  "Communication Skills",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Tech enthusiast and passionate developer from Kolkata, West Bengal, with a diverse background in both research and corporate domains. Proficient in programming with Python and experienced in developing machine learning and deep learning models. Recognized for contributions in the field with IEEE Conference research papers and a patent filed with the Government of India. Specialized in research areas such as machine learning, artificial intelligence, deep learning, and natural language processing. Committed to leveraging cutting-edge technologies to solve complex problems and drive innovation. Strong analytical skills and a collaborative approach to achieving impactful results.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
