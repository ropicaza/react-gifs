import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif.jsx';
import GifList from './gif_list';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      gifs: [],
      selectedGifId: "dPIPDAF8hOlZC"
    }

    this.search("disney");
  }

  search = (query) => {
    giphy('12DrxtISS76ZFBiYGvHa8why0AEBpiFv').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });

  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={ this.state.selectedGifId }/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
