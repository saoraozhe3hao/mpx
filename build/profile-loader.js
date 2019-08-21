const loaderUtils = require('loader-utils');

module.exports = function (source,option) {
  const options = loaderUtils.getOptions(this);
  if(options.profile === "prod"){
    // 删除掉 只在开发时要用的代码
    return source.replace(/\/\*only dev start[\s\S]*only dev end\*\//, '');
  }
  return source;
};
