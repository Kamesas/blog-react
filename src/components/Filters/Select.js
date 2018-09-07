import React, { Component } from "react";
import fixtures from "../../fixtures";
import makeAnimated from "react-select/lib/animated";
import Select from "react-select";

class UserForm extends Component {
  state = {
    selectTitile: null
  };

  render() {
    const titles = fixtures.map(article => ({
      value: article.id,
      label: article.title
    }));
    return (
      <div>
        <div>
          <Select
            options={titles}
            value={this.state.selectTitile}
            onChange={this.handleChange}
            components={makeAnimated()}
            isMulti
            placeholder="Выберите статью"
          />
        </div>
      </div>
    );
  }

  handleChange = selectTitile => {
    this.setState({ selectTitile });
    console.log(`Option selected:`, selectTitile);
  };
}

export default UserForm;
