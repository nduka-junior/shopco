import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
    DialogTrigger,
DialogFooter
} from "@/components/ui/dialog";
import CustomButton from "./customButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function Modal() {
  return (
    <div className="!font-satoshi">
      <Dialog >
        <DialogTrigger>
          <CustomButton
            text="Write a Review"
            bgColor="bg-black"
            color="text-white"
            asChild
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>
              <div className="font-integral text-2xl">Write a Review</div>
            </DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4 font-satoshi">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label htmlFor="review" className="text-right">
                Your review
              </Label>
              <Textarea
                placeholder="Type your review here."
                id="review"
                className="col-span-3 "
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input className="col-span-3" type="number" max={5} id="rating" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-black">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Modal;
