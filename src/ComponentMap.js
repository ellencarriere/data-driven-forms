import React from 'react';

const ComponentMap = () => (
  <div className="flex">
    <div className="half-page">
    <h2>Component Mapper</h2>
    </div>
    <div className="half-page">
    <code>
    {`const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  "customType": MyCustomComponent
};`}
    </code>
    </div>
  </div>
);

export default ComponentMap;
