const selectorClassPatternRules = {
  components:
    '^([a-z]+-)?([A-Z][a-zA-Z0-9]+)(-[a-zA-Z0-9]+)?(--[a-zA-Z0-9]+)?$',
  utilities:
    '^u-((|palmOnly|lapOnly|lapToLapWide|lapToDesk|lapAndUp|lapWideOnly|lapWideToDesk|lapWideAndUp|deskOnly|deskAndUp|wallOnly)-)?[a-z][a-zA-Z0-9]+$',
  states: '^(has|is|in)-[a-z][A-Za-z0-9]+$'
};

function getFormattedSelectorClassPatternRules() {
  return Object.values(selectorClassPatternRules)
    .map((rule) => `(${rule})`)
    .join('|');
}

module.exports = {
  selectorClassPatternRules,
  getFormattedSelectorClassPatternRules
};
