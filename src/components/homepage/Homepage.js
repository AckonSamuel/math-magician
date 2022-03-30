import React from 'react';
import './homepage.css';

const Homepage = () => (
  <div className="introduction">
    <h1 className="title">LEGEND</h1>
    <p>
      WELCOME TO MATH MAGICIANS!!
      <br />
      <br />
      <br />
      Mathematics, a branch of Science
      that incorporates structure,
      order, and relation that has advanced from counting,
      measuring and describing the shapes of objects.
    </p>

    <p>
      Mathematics deals with logical reasoning and
      quantitive calculation. Since the 17th century, it has been
      an indispensable adjunct to the physical sciences and
      technology, to the extent that it is considered the underlying
      language of science.
    </p>

    <p>
      Among the principal branches of mathematics are algebra,
      analysis, arithmetic, combinatorics, Euclidean and non-Euclidean
      geometrics, game theory, number theory, numerical analysis,
      optimization, probability, set theory, statistics, topology,
      and trigonometry
    </p>

    <p className="reference">
      Reference:
      <a href="https://www.britannica.com/summary/mathematics">
        Britannica
      </a>
    </p>
  </div>
);

export default Homepage;
