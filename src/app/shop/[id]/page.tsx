"use client"
import ProductsDisplay from "@/components/ProductsDisplay";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
function page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="p-6">
      <ProductsDisplay id={id} />
    </div>
  );
}

export default page;
