const ast = require('./data/ast.data.js');
const {convertAstToHtmlString_exp, closingTagArray} = require('./func()/func.js')

let finalAST = ''
finalAST += convertAstToHtmlString_exp(ast);

for (let i = 0; i = closingTagArray.length; i++){
  finalAST += closingTagArray.pop() + '\n';
}
console.log(finalAST);
