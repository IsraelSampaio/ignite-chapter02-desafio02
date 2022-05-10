import React from "react";

export type ContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.JSXElementConstructor<{ size: number }>;
}
