import React, { FunctionComponent } from 'react';

interface ErrorProps {
  title?: string;
}

const TAG = 'Error';

const Error: FunctionComponent<ErrorProps> = ({ title }) => {
  return <span>TODO: Error component - {title}</span>;
};

Error.displayName = TAG;

export default Error;
