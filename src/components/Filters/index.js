import React, { Component } from "react";
import PropTypes from "prop-types";
import DateRange from "./DateRange";
import Select from "./Select";

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array
  };

  render() {
    return (
      <div>
        <Select />
        <DateRange />
      </div>
    );
  }
}

export default Filters;
