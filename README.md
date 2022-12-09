# Form Generator

Apps to generate a dynamic form from data.

## Input

In the following example you can see all properties supported.

```json
{
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
}
```

### title

Represents the title of the generated form. It has to be an `string` if you include it, but it is optional.

### actions

Represent the buttons of the generated form. It has to be a list of _actions_, which is an object with two properties: `text: string` and `type: string`.

- `text`: required and is the text of the button
- `type: "primary" | "secondary"`: optional (default is `"primary"`) and is the type (style) of the button

### items

Is a list of items, which is required and each item represent a form field, i.e. a text field, a checkbox etc. Every Item must have a `label: string` and a `type: "number" | "string" | "multi-line" | "boolean" | "date" | "enum"`

## TODO

- [ ] Improve error message for invalid JSON errors
- [ ] Increase test coverage
