"use client"
import ProductsDisplay from "@/components/ProductsDisplay";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
function page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Assuming the dynamic route is something like /shop/[id]
  const id = pathname.split('/').pop(); 
  return (
    <div className="p-6">
      <ProductsDisplay id={id} />
    </div>
  );
}

export default page;
