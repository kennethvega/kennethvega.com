import React, { ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[61rem] mx-auto px-5 xmd:px-12 sm:px-3">
      {children}
    </div>
  );
};

export default Container;
