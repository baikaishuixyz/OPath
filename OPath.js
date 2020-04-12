function oPath(o, path) {
  // var path = path.replace(/^\[(.*)\]$/, '$1');

  path = path.split('.').map(item => {
    if(item.includes('[')) {
      return item.replace(/^([0-9a-zA-Z]+)(\[[0-9]+)\]$/, '$1' + ']' + '$2')
    }
    return item
  }).join('][');

  var pathArr = path.split('][');
  pathArr.forEach(prop => {
    o = o[prop]
  })

  return o
};

module.exports = oPath;
