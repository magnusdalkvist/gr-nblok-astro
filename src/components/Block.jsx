import React from "react";

export default function Block({ as: Component = "p", children, ...props }) {
  return <Component>{children}</Component>;
}
