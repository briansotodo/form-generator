/**
 * Allow testing `validateConfig` easier for developers by allowing them
 * to use JavaScript objects, while keeping the tests themselfs very close
 * to a how users would trigger `validateConfig`: JS object from unknown string.
 * @param jsObject a js object representing user input
 * @returns an object without TS type information
 */
function simulateUserInput(jsObject: unknown) {
  return JSON.parse(JSON.stringify(jsObject));
}

export default simulateUserInput;
