import React from "react";

const text = "sample";

export const Success: React.FC = () => {
  return (
    <span>{`${text}`}</span>
  );
};

export const Failed: React.FC = () => {
  return (
    // eslint-disable-next-line local-rules/jsxDollar
    <span>${text}</span>
  );
};

export const SuccessFragment: React.FC = () => {
  return (
    <>{`${text}`}</>
  );
};

export const FailedFragment: React.FC = () => {
  return (
    // eslint-disable-next-line local-rules/jsxDollar
    <>${text}</>
  );
};
