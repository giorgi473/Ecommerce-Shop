import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 sm:px-0 md:px-0 lg:px-4 py-6">
      {children}
    </div>
  );
}

export default Container;
