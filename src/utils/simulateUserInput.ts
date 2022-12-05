/**
 * To test validateConfig as it will be use by a user, we need to
 * avoid TypeScript type checks in the unit tests.
 * @param jsObject a js object representing user input
 * @returns an object without TS type information
 */
function simulateUserInput(jsObject: unknown) {
  return JSON.parse(JSON.stringify(jsObject));
}

export default simulateUserInput;
