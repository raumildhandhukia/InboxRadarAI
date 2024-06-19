"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div id="pricing" className="pb-20">
      <div className="font-bold text-4xl md:text-5xl text-center mb-20">
        <p className="">Pricing</p>
      </div>
      <div className="flex flex-col items-center gap-y-10 md:flex-row justify-center md:gap-x-6">
        <div className="max-w-sm w-[80%] md:w-[28%] h-[90%]">
          <BackgroundGradient
            className="rounded-md max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
            type="free"
          >
            <div className="relative pricing-card bg-white dark:bg-zinc-900 p-6 rounded-none shadow-lg min-h-[48vh] md:min-h-[64vh] 2xl:min-h-[44vh]">
              <h3 className="ThemeText text-3xl !text-left mb-4">Free</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Perfect for getting started
              </p>
              <div className="text-center mb-6 flex justify-center items-center">
                <span className="text-4xl font-bold text-black dark:text-neutral-200">
                  $0
                </span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  /month
                </span>
              </div>
              <ul className="text-neutral-600 dark:text-neutral-400 mb-6">
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="#D3D3D3" />
                  100 Email analysis
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="gray" />
                  No Insights Dashboard
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="gray" />
                  No Custom Tag Generation
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="gray" />1 Email Processing per
                  Minute
                </li>
              </ul>
              <div className="absolute bottom-4 flex w-[80%] justify-center items-center">
                <Button
                  variant="hacker"
                  className="w-full rounded-none px-3 py-1"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </BackgroundGradient>
        </div>

        <div className="max-w-sm w-[80%] md:w-[28%] h-[80%]">
          <BackgroundGradient
            type="pro"
            className="rounded-md max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 "
          >
            <div className="relative pricing-card bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg min-h-[48vh] md:min-h-[64vh] 2xl:min-h-[44vh]">
              <h3 className="text-3xl font-bold text-black dark:text-indigo-200 mb-4">
                Pro
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Recommended for daily users
              </p>
              <div className="text-center mb-6 flex justify-center items-center">
                <span className="text-4xl font-bold text-black dark:text-neutral-200">
                  $1.99{" "}
                  <p className="line-through text-gray-700 text-xl">$4.99</p>
                </span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  /month
                </span>
              </div>
              <ul className="text-neutral-600 dark:text-neutral-400 mb-6">
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="#D3D3D3" />
                  1000 Email analysis
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="#D3D3D3" />
                  Insights Dashboard
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="gray" />
                  No Custom Tag Generation
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="gray" />1 Email Processing per
                  Minute
                </li>
              </ul>
              <div className="absolute bottom-4 flex w-[80%] justify-center items-center">
                <Button
                  variant="hacker"
                  className="w-full rounded-none px-3 py-1 text-black"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </BackgroundGradient>
        </div>
        <div className="max-w-sm w-[80%] md:w-[28%] h-[90%]">
          <BackgroundGradient
            type="max"
            className="rounded-md max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
          >
            <div className="relative pricing-card bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg min-h-[48vh] md:min-h-[64vh] 2xl:min-h-[44vh]">
              <h3 className="text-3xl font-bold text-black dark:text-yellow-300 mb-4">
                Max
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                For power users
              </p>
              <div className="text-center mb-6 flex justify-center items-center">
                <span className="text-4xl font-bold text-black dark:text-neutral-200">
                  $4.99{" "}
                  <p className="line-through text-gray-700 text-xl">$9.99</p>
                </span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  /month
                </span>
              </div>
              <ul className="text-neutral-600 dark:text-neutral-400 mb-6">
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="#D3D3D3" />
                  5000 Email analysis
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="#D3D3D3" />
                  Insights Dashboard
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="#D3D3D3" />
                  Custom Tag Generation
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="#D3D3D3" />
                  Unlimited Email Processing
                </li>
              </ul>
              <div className="absolute bottom-4 flex w-[80%] justify-center items-center">
                <Button
                  variant="hacker"
                  className="w-full rounded-none px-3 py-1 text-black"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
