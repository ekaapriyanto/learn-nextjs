import React from "react";

export default function Layout({
  children,
  product,
  analytics,
  payment,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  analytics: React.ReactNode;
  payment: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5 flex justify-center items-center">
        {product}
        {analytics}
      </div>
      <div>{payment}</div>
    </div>
  );
}
