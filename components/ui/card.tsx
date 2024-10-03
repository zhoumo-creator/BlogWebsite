import React from 'react';

export const Card = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const CardContent = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const CardHeader = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const CardTitle = ({ children, ...props }) => {
  return <h3 {...props}>{children}</h3>;
};

export const CardDescription = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};