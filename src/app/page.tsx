import Background from "@/components/Background";
import Brands from "@/components/Brands";
import DressStyle from "@/components/DressStyle";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Products from "@/components/Products";
import SignUp from "@/components/SignUp";
import datas from "@/utils/products.json"
// types/product.ts
export interface Product {
  mainImage: string;
  title: string;
  rating: number;
  price: number;
  discountPrice: number;
  category: string;
  type: string;
  id: number;
  description: string;
  colors: string[];
  size: string[];
  displayImage: string[];
  arrival?:boolean;
  topSelling?: boolean;
  gender:string
  
}
export default function Home() {
  // data/products.js

  const arrivals = datas.filter((data, index) => {
     return data.arrival == true
  })
   const topSelling = datas.filter((data, index) => {
     return data.topSelling == true;
   });

  return (
    <div>
      <SignUp />
      <Nav />
      <Background />
      <Brands />
      <Products products={arrivals} title={"NEW ARRIVALS"} />
      <Products products={topSelling} title={"TOP SELLING"} />
      <DressStyle />
      <Footer />
    </div>
  );
}
