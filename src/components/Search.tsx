import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Search() {
    return (
      <div>
        <Drawer>
          <DrawerTrigger className="md:hidden flex items-center">
            <Image src="/search.svg" height={24} width={24} alt="search icon" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              {/* <DrawerTitle></DrawerTitle> */}
              <DrawerDescription className="px-5 pt-8 h-[70vh]">
                <div className="md:hidden  flex justify-centeritems-center border bg-[#F0F0F0] border-none w-full p-3 rounded-3xl  md:font-satoshi  ">
                  <Image
                    src="/search 1.svg"
                    height={20}
                    width={20}
                    alt="search icon"
                    className="mr-2"
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none  bg-transparent  w-full text-sm"
                  />
                </div>
              </DrawerDescription>
            </DrawerHeader>
            {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </div>
    );
}

export default Search;
