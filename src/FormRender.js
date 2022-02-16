import React from 'react';

const FormRender = () => (
  <div className="flex">
    <div className="half-page">
    <h2>Form Renderer</h2>
    </div>
    <div className="half-page">
    <code>
    {`<FormRenderer

componentMapper={componentMapper}

FormTemplate={FormTemplate}
schema={schema}
onSubmit={console.log}
onCancel={() => console.log('Cancel action')}
/>`}
    </code>
    </div>
  </div>
);

export default FormRender;
