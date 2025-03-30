import React from "react";
import { Logo } from "./svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight, Menu, ShoppingCart, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center h-[88px] gap-5 lg:justify-center justify-between border-y px-2">
      <div className="flex gap-2 items-center">
        <Drawer direction="right">
          <DrawerTrigger asChild className="cursor-pointer">
            <Menu color="#34A853" size={"28px"} className="lg:hidden" />
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>
                  <div className="flex justify-between">
                    <Link href={"/"} className="cursor-pointer"><Logo/></Link>
                    <div className="flex gap-1.5 items-center">
                      <ShoppingCart color="#34A853" size={"28px"} />
                      <DrawerClose asChild>
                        <X color="#34A853" size={"28px"} />
                      </DrawerClose>
                    </div>
                  </div>
                </DrawerTitle>
                <DrawerDescription></DrawerDescription>
              </DrawerHeader>
              <div className="p-2">
                <Button className="w-full bg-white border border-[#34A853] text-[#34A853] rounded-sm my-2">
                  Sign In
                </Button>
                <Button className="w-full bg-[#11381C] border border-[#34A853] text-white rounded-sm my-2">
                  Sign In
                </Button>
                <Link href={"/businesses"}><Button className="w-full bg-white border border-[#34A853] text-[#34A853] rounded-sm my-2">
                  Vendors Stores
                </Button></Link>
              </div>
              <div className="px-2">
                <p className="font-[500] text-[18px] text-[#34A853] my-3">
                  Categories
                </p>
                <Link href={"/"}>
                  {" "}
                  <div className="flex justify-between hover:bg-[#34A8530D] py-3">
                    <p>Home</p>
                    <ChevronRight />
                  </div>
                </Link>
                <Link href={"/businesses"}>
                  {" "}
                  <div className="flex justify-between hover:bg-[#34A8530D] py-3">
                    <p>Add Business</p>
                    <ChevronRight />
                  </div>
                </Link>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
        <Link href={"/"} className="cursor-pointer"><Logo/></Link>
      </div>
      <div className="lg:flex items-center gap-1 hidden ">
        <p>Categories </p>
        <div className="bg-[#11381C] rounded-full flex items-center justify-center">
          <ChevronDown color="white" size={"16px"} />
        </div>
      </div>
      <div className="lg:flex items-center gap-1 hidden ">
        <p>Help</p>
        <div className="bg-[#11381C] rounded-full lg:flex items-center justify-center hidden ">
          <ChevronDown color="white" size={"16px"} />
        </div>
      </div>
      <Input
        placeholder="Search for anything...."
        type="search"
        className="bg-[#DEF2FB4D] w-[400px] h-[48px] hidden lg:block"
      />
      <button className="bg-[#11381C] text-white font-bold p-3 rounded-lg h-[48px] w-[155px] hidden lg:block">
        Sell on Bundo
      </button>
      <Link href={"/businesses"}><button className="text-[#34A853] border border-[#34A853]  p-3 rounded-lg h-[48px] w-[155px] hidden lg:block">{`Vendor's Store`}</button></Link>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="hidden lg:block">Account & Orders</p>
        <ShoppingCart color="#34A853" />
      </div>
    </div>
  );
}

export default Header;
