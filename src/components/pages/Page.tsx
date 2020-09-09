import React from "react";

interface PageProps {
  title?: string;
  children?: React.ReactNode;
}

export const Page = ({ title, children }: PageProps) => {
  document.title = title || "Gowon";

  return <div>{children}</div>;
};
