import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import TextField from '@data-driven-forms/mui-component-mapper/text-field';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';
import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';


const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};

const schema = {
  fields: [
    {
      name: 'first-name',
      label: 'First name',
      component: componentTypes.TEXT_FIELD,
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
    },
    {
      name: 'last-name',
      label: 'Last name',
      component: componentTypes.TEXT_FIELD,
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
    },
    {
      name: 'age',
      label: 'Age',
      component: componentTypes.TEXT_FIELD,
      type: 'number',
    },
  ],
};

const FormTemplateCanReset = (props) => <FormTemplate {...props} canReset />;

const RequiredForm = () => (
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

export default RequiredForm;
