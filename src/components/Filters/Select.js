import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { changeSelection } from "../actionCreators";
import makeAnimated from "react-select/lib/animated";

//import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
  handleChange = selected =>
    this.props.changeSelection(selected.map(option => option.label));
  // handleChange = selected =>
  //   this.props.changeSelection(
  //     selected.map(option => option)
  //     //console.log(selected.map(option => option.value))
  //   );

  render() {
    const { articles, selected } = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <Select
        options={options}
        value={selected}
        isMulti
        cacheOptions
        onChange={this.handleChange}
        components={makeAnimated()}
      />
    );
  }
}

export default connect(
  state => ({
    selected: state.filters.selected,
    articles: state.articleReducer
  }),
  { changeSelection }
)(SelectFilter);
