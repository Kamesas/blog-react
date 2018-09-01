import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.user}</h5>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Comments;

// import React from 'react'
// import PropTypes from 'prop-types'

// function Comments({comment}) {
//     return (
//         <div>
//         <h5>{this.props.user}</h5>
//         <p>{this.props.text}</p>
//         </div>
//     )
// }

// Comment.propTypes = {
//     comment: PropTypes.shape({
//         text: PropTypes.string.isRequired,
//         user: PropTypes.string.isRequired
//     }).isRequired
// }

// export default Comments
