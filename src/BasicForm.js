import { Select } from '@data-driven-forms/mui-component-mapper';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import TextField from '@data-driven-forms/mui-component-mapper/text-field';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';


const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.SELECT]: Select
};

const schema = {
  fields: [
    {
      name: 'first-name',
      label: 'First name',
      component: componentTypes.TEXT_FIELD,
    },
    {
      name: 'last-name',
      label: 'Last name',
      component: componentTypes.TEXT_FIELD,
    },
    {
      name: 'age',
      label: 'Age',
      component: componentTypes.TEXT_FIELD,
      type: 'number',
    },
    {
      "component": componentTypes.TEXT_FIELD,
      "name": "text-fiel",
      "type": "password",
      "label": "Password"
    },
    {
      "component": componentTypes.TEXT_FIELD,
      "name": "text-field",
      "label": "Website",
      "validate": [
        {
          "type": "url"
        }
      ]
    },
    {
      "component": "select",
      "name": "select",
      "options": [
        {
          "value": "red",
          "label": "Red"
        },
        {
          "value": "blue",
          "label": "Blue"
        },
        {
          "value": "",
          "label": "Yellow"
        }
      ],
      "label": "Color"
    }
  ],
};

const FormTemplateCanReset = (props) => <FormTemplate {...props} canReset />;

const BasicForm = () => (
  <div className="flex">
    <div className="half-page">
    <CodeBlock
      text={JSON.stringify(schema, null, 2)}
      language={"js"}
      theme={dracula}
    />
    </div>
    <div className="half-page">
      <FormRenderer
        componentMapper={componentMapper}
        FormTemplate={FormTemplateCanReset}
        schema={schema}
        onSubmit={console.log}
        onCancel={() => console.log('Cancel action')}
      />
    </div>
  </div>
);

export default BasicForm;
