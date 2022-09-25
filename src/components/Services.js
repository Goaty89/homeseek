import * as React from "react";
import PropTypes from "prop-types";

const ServicesGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </section>
      </div>
    ))}
  </div>
);

ServicesGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default ServicesGrid;
