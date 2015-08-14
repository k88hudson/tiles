module.exports = {
  getSites: function (n) {
    n = n || 1;
    return Array.apply(null, new Array(n)).map(generateItem);
  },
  getSite: function() {
    return this.getSites(1)[0];
  }
};

var mockData = [
  {title: 'New York Times'},
  {title: 'Reddit'},
  {title: 'Webmaker'},
  {title: 'Toronto Star'},
  {title: 'Twitter'},
  {title: 'Facebook'},
  {title: 'Foo'},
  {title: 'Bar'},
  {title: 'Baz'},
  {title: 'Qux'},
  {title: 'Flip'},
  {title: 'Quack'}
];

function generateItem() {
  if (mockData.length) {
    return mockData.shift();
  } else {
    return {title: 'Some website ' + (new Date().toString())};
  }
}
