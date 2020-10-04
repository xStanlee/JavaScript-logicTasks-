let outputHTML = '';
let closingTagArray = [];

function convertAstToHtmlString(astObject) {
  if (Array.isArray(astObject)){
    const lenOfChildrenObjectsArgs = astObject.length;
    for (let el = 0; el < astObject.length; el++){
      const previousRecursionChildElement = astObject[el];
      const {nodeType, tagName, attributes, children} = previousRecursionChildElement;
      if(nodeType === 'element' && children !== undefined){
        outputHTML += openingTag(tagName, attributes) + '\n';
        closingTagArray.push(closingTag(tagName));
        convertAstToHtmlString(children);
      }else if (nodeType === 'element' &&  children === undefined){
        outputHTML += '\t' + openingTag(tagName, attributes) + '\n';
      }else {
        outputHTML += '\t' + previousRecursionChildElement.value;
        outputHTML += '\n' + closingTagArray.pop() + '\n';
      }
    }
  }
  const element = astObject;
  const {nodeType, tagName, attributes, children} = element
  if (nodeType === 'element'){
    outputHTML += openingTag(tagName, attributes) + '\n';
    closingTagArray.push(closingTag(tagName));
  }
  if (children !== undefined){
    convertAstToHtmlString(children);
  }
  return outputHTML;
}

    function openingTag(tagName, atr){
      const onlyOnePair = 1;
      let tagWithAttributes = `<${tagName}`;
      
      if (atr.length === onlyOnePair){
        const [{name, value}] = atr;
        tagWithAttributes += ` ${name}="${value}">`
        return tagWithAttributes;
      }else {
        for (let el = 0; el < atr.length; el++){
          const{name, value} = atr[el];
          tagWithAttributes += ` ${name}="${value}"`;
          }
        tagWithAttributes += ">"
        return tagWithAttributes;
      }
    }

    function closingTag(tagName){
      return `</${tagName}>`;
    }

const convertAstToHtmlString_exp = convertAstToHtmlString;

module.exports = {
    "convertAstToHtmlString_exp": convertAstToHtmlString_exp,
    "closingTagArray": closingTagArray
};
