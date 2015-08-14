var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (<form className="search">
      <div className="search-input-wrapper">
        <button className="search-settings"><img src="./img/magnifier.png" alt="change search settings" /></button>
        <input className="search-input" />
        <button className="search-submit">Search</button>
      </div>
    </form>);
  }
});
