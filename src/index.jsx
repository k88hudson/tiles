var React = require('react/addons');
var Tile = require('./components/tile/tile.jsx');
var Search = require('./components/search/search.jsx');


var api = require('./lib/api');

var Main = React.createClass({

  mixins: [require('sortablejs/react-sortable-mixin')],

  getInitialState: function () {
    return {
      items: api.getSites(12)
    };
  },

  sortableOptions: {
    ref: 'tiles'
  },

  handleSort: function (e) {
    console.log(this.state.items);
  },

  fillTiles: function () {
    var items = pinned.map(function (item) {
      if (item) {
        return item
      } else {
        return api.getSite();
      }
    });
  },

  togglePin: function (index) {
    var items = this.state.items;
    items[index].pinned = !items[index].pinned;
    this.setState({items});
  },

  removeItem: function (index) {
    var items = JSON.parse(JSON.stringify(this.state.items));
    items[index] = null;
    var unpinned = items.filter(item => item && !item.pinned);
    unpinned.push(api.getSite());
    items = items.map(item => {
      if (item && item.pinned) return item;
      return unpinned.shift();
    });
    this.setState({items});
  },

  render: function () {

    return (<div className="container">
      <Search />
      <div ref="tiles" className="tile-container">
        {this.state.items.map((item, i) => <Tile key={i} id={i} {...item} togglePin={this.togglePin} removeItem={this.removeItem} />)}
      </div>
    </div>);
  }
});

React.render(<Main />, document.getElementById('app'));


