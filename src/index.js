module.exports = function check(str, bracketsConfig) {
  var arr = str.split('');

  for(var i = 0; i < bracketsConfig.length; i++) {
    var open = 0;
    var close = 0;

    for(var k = 0; k < arr.length; k++) {
      if (arr[k] === bracketsConfig[i][0]) {
        
        if(k + 1 < arr.length) {
          for(var j = 0; j < bracketsConfig.length; j++) {
            if(str[k + 1] === bracketsConfig[j][1]) {
              if(i === j) {
                continue;
              }

              return false;
            }
          }
        }
        
        open++;
      }
      
      if (arr[k] === bracketsConfig[i][1]) {
        close++;
      }

      if(close > open) {
        return false;
      }
    }

    if(close !== open) {
      return false;
    }
  }

  return true;
}