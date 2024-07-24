"use client";
import Products from "@/components/Products";
import React, { Suspense } from "react";
import datas from "@/utils/products.json";
import MainProduct from "@/components/MainProduct";
import Filter from "@/components/Filter";
import FilterBig from "@/components/FilterBig";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "default category"; // Provide a default category

  console.log(category, "ewdqs");

  const categoryData = datas.filter((data, index) => {
    return data.category == category;
  });

  if (categoryData.length === 0)
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-integral mb-6">Category Not Found</h1>
        <Link
          href="/"
          className="py-3 px-6 rounded-lg bg-black text-white w-full"
        >
          Home
        </Link>
      </div>
    );

  return (
    <div className="p-10 lg:grid grid-cols-12 grid-row">
      <div className="h-full col-span-3">
        <div className="max-lg:hidden">
          <FilterBig product={categoryData} />
        </div>
      </div>
      <div className="col-span-9 lg:px-6">
        <MainProduct products={categoryData} title={category} />
      </div>
    </div>
  );
}

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPage />
    </Suspense>
  );
}

export default Page;
