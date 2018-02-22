module.exports = function check(str, bracketsConfig) {
  // your solution
    let config = [].concat.apply([], bracketsConfig),
        stack = [],
        bracket,
        lastBracket,
        character;

    for(let i = 0; character = str[i]; i++){

        bracket = config.indexOf(character);
        lastBracket = config.lastIndexOf(character);

        if(bracket === -1) return false;

        if(bracket % 2 == 0 && stack[stack.length - 1] !== lastBracket)	stack.push(bracket+1);
        else{
            if(stack.length === 0 || stack.pop() !== lastBracket){
                return false;
            }
        }
    }

    return stack.length === 0;
}
