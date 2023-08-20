module.exports = function check(str, bracketsConfig) {
  // your solution
  let openBr = {};
  bracketsConfig.forEach( items => {
    openBr[items[0]] = items[1];});


    function checkBrac(str) {
      const result = [];
      for (let i = 0; i < str.length; i++) {
          let currentItem = str[i];
          const a = result[result.length - 1];

          if (result.length && openBr[a] === currentItem) {
              result.pop();
              continue;
          }

          result.push(currentItem);
      }
      return result.length === 0;
  }
  return checkBrac(str);
}
