var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (<div className={'tile' + (this.props.pinned ? ' pinned' : '')}>
      <div className="tile-thumbnail" />
      <div className="tile-title">{this.props.title}</div>
      <img hidden={!this.props.pinned} className="pinned-icon" alt="tile is pinned" src="./img/pin.svg" />
    <button onClick={() => this.props.togglePin(this.props.id)} className="btn pin-btn">
        <img alt="pin" src="./img/pin.svg" />
      </button>
      <button onClick={() => this.props.removeItem(this.props.id)} className="btn close-btn">
        <img alt="close" src="./img/x.svg" />
      </button>
    </div>);
  }
});
