/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
 const projectList = [
  {
    title: "Fashion MNIST Model",
    description:
      "It is a Fashion MNIST Model which is trained on the Fashion MNIST Dataset and is able to predict the class of the image with an accuracy.",
    url: "https://github.com/mitul-goswami/Machine-Learning--Projects/blob/main/FMNIST.py",
  },
  {
    title: "Stone Paper Scissor Game",
    description:
      "It is a stone paper scissors game which is made using python and is played between the user and the computer.",
    url: "https://github.com/mitul-goswami/Python-Projects/blob/main/Stone-Paper-Scissors.py",
  },
  {
    title: "Ludo Game",
    description:
      "It is a ludo game which is made using C and is played between the user and the computer.",
    url: "https://github.com/mitul-goswami/C-Projects/blob/main/ludo.c",
  },
  {
    title: "Heart Disease Prediction Using SVM Model With Quantization Techniques",
    description:
      "It is a Heart Disease Prediction Model which is trained on the Heart Disease Dataset and is able to predict the class of the image with an accuracy.",
    url: "https://colab.research.google.com/drive/1s0TZ2_ve8-uoZ7MHkOKXu2MyClVfxn4m?usp=sharing",
  },
  {
    title: "Breast Cancer Detection Using KNN Model With Quantization Techniques",
    description:
      "It is a Breast Cancer Detection Model which is trained on the Breast Cancer Dataset and is able to predict the class of the image with an accuracy.",
    url: "https://colab.research.google.com/drive/1zKLQPrvp9bqjjQzUR8wavf07qVAEzbQi?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
