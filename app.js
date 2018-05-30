function getParam(name, search) {
  const params = search.split("&");
  const found = params.find(elem => {
    return elem.includes(name);
  });
  if (found) {
    const param = found.split("=");
    return param[1];
  }
}

module.exports.getParam = getParam;
