import React from "react";
import { Text } from "./styles";

type HyperlinkProps = {
  name: string;
  path: string;
};

export const Hyperlink: React.FC<HyperlinkProps> = ({ name, path }) => (
  <Text href={path} target="_blank">
    {name}
  </Text>
);
