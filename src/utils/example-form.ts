/**
 * A valid form which incldues all the options we support. This ie meant
 *   - to display a form as default so users don't have to start from scratch #docs
 *   - to automatic test that de application behave as expected with valid input
 */
const EXAMPLE_FORM = `{
  "title": "Example Form",
  "actions": [
    { "text": "Cancel", "type": "secondary" },
    { "text": "Save", "type": "primary" }
  ],
  "items": [
    { "label": "Count", "type": "number" },
    { "label": "Editable", "type": "boolean" },
    { "label": "Caption", "type": "string" },
    { "label": "Description", "type": "multi-line" },
    { "label": "Date", "type": "date" },
    {
      "label": "Color",
      "type": "enum",
      "options": [{ "label": "Red" }, { "label": "Green" }, { "label": "Blue" }]
    }
  ]
}`;

export default EXAMPLE_FORM;
