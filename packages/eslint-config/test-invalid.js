// Invalid JavaScript code that should fail linting
const badCode = () => {
  // This should trigger no-debugger rule
  debugger;
  
  // This should trigger no-console rule (warning)
  console.log('Debug message');
  
  // This should trigger no-eval rule
  const result = eval('2 + 2');
  
  // This should trigger no-dupe-keys rule
  const obj = {
    name: 'test',
    name: 'duplicate'
  };
  
  // This should trigger eqeqeq rule
  if (result == '4') {
    return true;
  }
  
  // This should trigger no-unreachable rule
  return false;
  const unreachable = 'never executed';
};
