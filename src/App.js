import React, { Component } from 'react';
import './App.css';
import CoinHive from 'react-coinhive';

class App extends Component {
  
  state = {
    isRunning: true,
    autoThreads: true,
    siteKey: ""
  }

  _handleDisableMining = () => {
    this.setState({ isRunning: false })
  }

  _handleEnableMining = () => {
    this.setState({ isRunning: true })
  }

  _handleSiteKeyChange = (event) => {
    this._handleDisableMining();
    this.setState({ siteKey: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Monero mining with Coinhive</h1>
        <div>
          Mining :&nbsp;
          <input
            type="button"
            value="on"
            disabled={this.state.isRunning}
            onClick={this._handleEnableMining}
          />
          <input
            type="button"
            value="off"
            disabled={!this.state.isRunning}
            onClick={this._handleDisableMining}
          />
        </div>
        <br />
        <div>
          siteKey :&nbsp;
          <input type="text" value={this.state.value} onChange={this._handleSiteKeyChange} />
        </div>
        <CoinHive
        userName="Surge"
        siteKey={this.state.siteKey !== "" ? this.state.siteKey : "TLMhWLS50Tdygx3SC0YXi5iYiCmpbNAU"}
        autoThreads={this.state.autoThreads}
        threads={2}
        src={CoinHive.src.authedmine}
        onInit={miner => setInterval(
          () => console.log(CoinHive.getMinerData(miner))
          , 1000
        )}
        run={this.state.isRunning}
      />
      </div>
    );
  }
}

export default App;
