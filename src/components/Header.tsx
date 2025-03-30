import React from "react";
import { Logo } from "./svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ChevronDown, Menu, ShoppingCart, X } from "lucide-react";
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

function Header() {
  return (
    <div className="flex items-center h-[88px] gap-5 lg:justify-center justify-between border-y px-2">
    <div className="flex gap-2 items-center">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Menu color="#34A853" size={"28px"} className="lg:hidden"/>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>
                <div className="flex justify-between">
                  <Logo />
                  <div className="flex gap-1.5 items-center">
                    <ShoppingCart color="#34A853" size={"28px"} />
                    <DrawerClose asChild>
                      <X color="#34A853" size={"28px"} />
                    </DrawerClose>
                  </div>
                </div>
              </DrawerTitle>
              <DrawerDescription>
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-2">
                <Button className="w-full bg-white border border-[#34A853] text-[#34A853] rounded-sm my-2">Sign In</Button>
                <Button className="w-full bg-[#11381C] border border-[#34A853] text-white rounded-sm my-2">Sign In</Button>
                <Button className="w-full bg-white border border-[#34A853] text-[#34A853] rounded-sm my-2">Vendors Stores</Button>

            </div>
            
          </div>
        </DrawerContent>
      </Drawer>
      <Logo /></div>
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
      <button className="text-[#34A853] border border-[#34A853]  p-3 rounded-lg h-[48px] w-[155px] hidden lg:block">{`Vendor's Store`}</button>
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
