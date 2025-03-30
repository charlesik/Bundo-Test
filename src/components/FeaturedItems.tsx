/* eslint-disable @next/next/no-img-element */
"use client";
import { getMarketPlace } from "@/services";
import { Heart, Loader, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
type FeaturedItems = {
  business_profile_picture: string;
  name: string;
  description: string;
  address: string;
};

function FeaturedItems() {
  const [isLoading, setIsLoading] = useState(false);
  const [featuredItems, setFeaturedItems] = useState<FeaturedItems[]>([]);

  const getFeaturedItems = async () => {
    try {
      setIsLoading(true);
      const result = await getMarketPlace();
      console.log("hiyaaa", result);
      setFeaturedItems(result?.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFeaturedItems();
  }, []);
  return (
    <div className=" p-3 lg:px-[80px] py-10">
      <div className="flex justify-between">
        <p className="font-[500] text-[24px]">Featured Items</p>

        {/* <p className="underline text-[#34A853]">see all</p> */}
      </div>
      <div>
        {isLoading ? (
          <div className="h-[300px] flex items-center justify-center my-3"><Loader /></div>
        ) : (
          <div className="py-4 flex flex-wrap gap-5 justify-center">
            {featuredItems.map((item, index) => {
              return (
                <div className="border w-[252px] rounded-lg p-2" key={index}>
                  <div className="bg-[#E3E3E3] rounded-lg p-2">
                    <div className="flex justify-end">
                      <div className="bg-white rounded-full h-[18px] w-[18px] flex items-center justify-center">
                        <Heart size={"12px"} />
                      </div>
                    </div>
                    <img
                      src={`${
                        item.business_profile_picture || "/business-icon.jpeg"
                      }`}
                      width={130}
                      height={130}
                      alt="Businnes Image"
                      className="m-auto"
                    />
                  </div>
                  <div className="py-3 flex flex-col gap-1 h-[200px]">
                    <p className="font-[500] text-[#1E1E1E]">{item.name}</p>
                    <p className="font-[300] text-[12px] text-[#1E1E1E] flex gap-1 items-center">
                      <MapPin size={"14px"} />
                      {item.address}
                    </p>
                    <p className="font-[300] text-[12px] text-[#1E1E1E]">
                      {item.description}
                    </p>

                    {/* <div className="flex gap-1 items-center">
                    <Star color="#34A853" fill="#34A853" />
                    <Star color="#34A853" fill="#34A853" />
                    <Star color="#34A853" fill="#34A853" />
                    <Star color="#34A853" fill="#34A853" />
                    <p className="font-[400] text-[12px]">(121)</p>
                  </div>
                  <p className="font-[500] text-[24px] text-[#1E1E1E]">
                    <span className="text-[16px]">₦</span>3,000
                  </p> */}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedItems;
