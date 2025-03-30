import React from "react";
import { Logo } from "./svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ChevronDown, ShoppingCart } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center h-[88px] gap-5 justify-center border-y">
      <Logo />
      <div className="flex items-center gap-1">
        <p>Categories </p>
        <div className="bg-[#11381C] rounded-full flex items-center justify-center">
          <ChevronDown color="white" size={"16px"}/>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p>Help</p>
        <div className="bg-[#11381C] rounded-full flex items-center justify-center">
          <ChevronDown color="white" size={"16px"}/>
        </div>
      </div>
      <Input
        placeholder="Search for anything...."
        type="search"
        className="bg-[#DEF2FB4D] w-[400px] h-[48px]"
      />
      <button className="bg-[#11381C] text-white font-bold p-3 rounded-lg h-[48px] w-[155px]">
        Sell on Bundo
      </button>
      <button className="text-[#34A853] border border-[#34A853]  p-3 rounded-lg h-[48px] w-[155px]">{`Vendor's Store`}</button>
      <div className="flex items-center gap-2"> 
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Account & Orders</p>
        <ShoppingCart color="#34A853"/>
      </div>
    </div>
  );
}

export default Header;
