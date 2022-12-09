import { FormConfig, FormItemType } from "../index.types";

/**
 * We need to make sure that the user input makes sense. Otherwise
 * she may end up with a broken form without knowing why, or app may crash.
 * @param formConfig config entered by the user and parsed as (valid) json
 * @returns valid formConfig
 */
function configValidation(formConfig: FormConfig) {
  // If `title` is present, it must be a string.
  if (
    formConfig.hasOwnProperty("title") &&
    typeof formConfig.title !== "string"
  ) {
    throw new SyntaxError(
      "Error at property 'title': If 'title' is present, it must be a string."
    );
  }

  // Validate actions elements, if there is any
  if (formConfig.hasOwnProperty("actions")) {
    if (!Array.isArray(formConfig.actions)) {
      throw new SyntaxError(
        "Error at property 'actions': If 'actions' is present, it must be an array."
      );
    } else if (
      !formConfig.actions.every(
        (action) => typeof action.text === "string" && action.text.length > 0
      )
    ) {
      throw new SyntaxError(
        `Error at property 'actions': every action must contain a 'text' property of type ${FormItemType.String} it must be a string.`
      );
    }
  }

  // `item` must be present and it has to be an array.
  if (!formConfig.hasOwnProperty("items")) {
    throw new SyntaxError("Error: `Items` array is missing.");
  } else if (!Array.isArray(formConfig.items)) {
    throw new SyntaxError("Error: `Items` must be an array.");
  } else if (formConfig.items.length < 1) {
    throw new SyntaxError("Error: `items` cannot be empty. Please add items.");
  }

  formConfig.items.forEach((item) => {
    if (!item.hasOwnProperty("label")) {
      throw new SyntaxError(
        "Error: Please make sure that every item has a `label` property."
      );
    } else if (typeof item.label !== "string") {
      throw new SyntaxError(
        "Error: The `label` property of an item must be a string."
      );
    } else if (!item.hasOwnProperty("type")) {
      throw new SyntaxError(
        "Error: Please make sure that every item has a `type` property."
      );
    } else if (
      typeof item.type !== "string" ||
      !Object.values(FormItemType).includes(item.type)
    ) {
      throw new SyntaxError(
        `Error: The \`type\` property of an item must be one of \`${Object.values(
          FormItemType
        ).join("`, `")}\`.`
      );
    } else if (
      item.type === FormItemType.Enum &&
      !item.hasOwnProperty("options")
    ) {
      throw new SyntaxError(
        `Error: The item with label='${item.label}' has the type='${item.type}' and must therefore include an \`options\` property.`
      );
    } else if (
      item.type === FormItemType.Enum &&
      (!Array.isArray(item.options) || item.options.length < 2)
    ) {
      throw new SyntaxError(
        `Error: The \`options\` property of the item with label='${item.label}' muss be and an array with at least two options in it.`
      );
    } else if (
      item.type === FormItemType.Enum &&
      Array.isArray(item.options) &&
      !item.options.every(
        (item: { label: string }) =>
          item.hasOwnProperty("label") && typeof item.label === "string"
      )
    ) {
      throw new SyntaxError(
        `Error at item with label='${item.label}': The \`options\`' elements of an item of type '${FormItemType.Enum}' must include a label property of type '${FormItemType.String}'.`
      );
    }
  });

  //

  return formConfig;
}

export default configValidation;
