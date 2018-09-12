module.exports = function check(str, bracketsConfig) {

    let config = [].concat.apply([], bracketsConfig);
    str = str.split('');
    
    for(let i = 0; i < str.length; i++) {      
      if(config.indexOf(str[i]) + 1 === config.lastIndexOf(str[i + 1])) {
      	str.splice(i, 2);
        i = -1;
      }
    }

    return str.length === 0;
}
