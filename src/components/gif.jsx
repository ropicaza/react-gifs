import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { selectGif } = this.props;

    if (selectGif) {
      const { id } = this.props;
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;

    if (!id) {
      return null;
    }

    const src = `https://media1.giphy.com/media/${id}/giphy.gif?cid=ecf05e472v6b2p8bgiiw8v8p71qd2kiahwlki8c7low1iehz&rid=giphy.gif&ct=g`;
    return (
      <img
        src={src}
        className="gif"
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
