module.exports = md => {
  md.core.ruler.before('inline', 'cite', state => {
    for (const token of state.tokens) {
      token.content = token.content.replaceAll(/""(.*?)""/g, '<cite>$1</cite>');
    }

    return state;
  });
};
