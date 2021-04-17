import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e472v6b2p8bgiiw8v8p71qd2kiahwlki8c7low1iehz&rid=giphy.gif&ct=g`;
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
