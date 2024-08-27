"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

const Pricing = ({
  noHeading,
  currentPlan,
}: {
  noHeading?: boolean;
  currentPlan?: string;
}) => {
  return (
    <div id="pricing" className="pb-20">
      {!noHeading && (
        <div className="font-bold text-4xl md:text-5xl text-center mb-10">
          <p className="">Pricing</p>
        </div>
      )}
      <div className="flex flex-col items-center gap-y-10 md:flex-row justify-center md:gap-x-10">
        <div className="md:w-[300px]" id="free">
          <div className=" rounded-2xl shadow-lg dark:bg-zinc-900">
            <div className="relative dark:bg-zinc-900 px-6 py-10 min-h-[48vh] md:min-h-[64vh] 2xl:min-h-[44vh]">
              <div className="flex gap-1 items-center">
                <h3 className="ThemeText text-3xl !text-left mb-4">Free</h3>

                {currentPlan === "FREE" && (
                  <Badge className="h-max -mt-3 bg-gray-100 text-black-200">
                    Active
                  </Badge>
                )}
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                For getting started
              </p>
              <div className="text-center flex justify-center items-center mb-12">
                <span className="text-4xl font-bold text-black dark:text-neutral-200">
                  $0
                </span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  /month
                </span>
              </div>
              <ul className="text-neutral-600 dark:text-neutral-400 mb-6">
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="gray" />
                  100 Email Processing
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="gray" />
                  AI Insights
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="red" />
                  No Automated Analysis
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="red" />3 Personalized Labels
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="red" />
                  Limited Email Processing{" "}
                </li>
              </ul>

              {currentPlan !== "FREE" && (
                <div className="absolute bottom-4 flex w-[80%] justify-center items-center">
                  <Button
                    variant="hacker"
                    className="w-full rounded-none px-3 py-1"
                  >
                    <Link
                      href={
                        currentPlan && currentPlan !== "FREE"
                          ? "/billing"
                          : "/auth/login"
                      }
                    >
                      {currentPlan && currentPlan !== "FREE"
                        ? "Downgrade"
                        : "Get Started"}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="md:w-[300px]">
          <div className=" rounded-2xl shadow-lg dark:bg-zinc-900 ">
            <div className="relative pricing-card dark:bg-zinc-900 px-6 py-10 min-h-[48vh] md:min-h-[64vh] 2xl:min-h-[44vh]">
              <div className="flex gap-1 items-center">
                <h3 className="ThemeText text-3xl !text-left mb-4">Pro</h3>

                {currentPlan === "PRO" && (
                  <Badge className="h-max -mt-3 bg-gray-100 text-black-200">
                    Active
                  </Badge>
                )}
              </div>
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
                  <BsPatchCheckFill color="gray" />
                  1000 Email Processing
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="gray" />
                  AI Insights
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="gray" />
                  Automated Analysis
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="red" />6 Personalized Labels
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <AiFillCloseCircle color="red" />
                  Limited Email Processing
                </li>
              </ul>

              <div className="absolute bottom-4 flex w-[80%] justify-center items-center">
                <Button
                  variant="hacker"
                  className="w-full rounded-none px-3 py-1"
                >
                  {currentPlan ? (
                    <Link
                      href={
                        currentPlan === "FREE" ? "/subscribe/Pro" : "/billing"
                      }
                    >
                      {currentPlan !== "PRO"
                        ? currentPlan === "MAX"
                          ? "Downgrade"
                          : "Subscribe"
                        : "Cancel"}
                    </Link>
                  ) : (
                    <Link href="/auth/login?sub-to-plan=Pro">Subscribe</Link>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="md:w-[300px]" id="Pro">
          <div className="md:min-w-[30%] rounded-2xl shadow-lg dark:bg-zinc-900">
            <div className="relative pricing-card dark:bg-zinc-900 px-6 py-10 min-h-[48vh] md:min-h-[64vh] 2xl:min-h-[44vh]">
              <div className="flex gap-1 items-center">
                <h3 className="ThemeText text-3xl !text-left mb-4">Pro</h3>

                {currentPlan === "PRO" && (
                  <Badge className="h-max -mt-3 bg-gray-100 text-black-200">
                    Active
                  </Badge>
                )}
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                For ultimate AI experience
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
                  <BsPatchCheckFill color="grey" />
                  5000 Email Processing
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="grey" />
                  AI Autocompletion
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="grey" />
                  AI Insights
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="grey" />
                  Context Prompting
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="gray" />
                  Automated Analysis
                </li>

                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="grey" />
                  No Rate Limiting
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="grey" />
                  Unlimited Inboxes
                </li>
                <li className="mb-2 flex gap-2 leading-[17px]">
                  <BsPatchCheckFill color="grey" />
                  20 Personalized Labels
                </li>
              </ul>

              <div className="absolute bottom-4 flex w-[80%] justify-center items-center">
                <Button
                  variant="hacker"
                  className="w-full rounded-none px-3 py-1"
                >
                  {currentPlan ? (
                    <Link
                      href={
                        currentPlan === "FREE" ? "/subscribe/Max" : "/billing"
                      }
                    >
                      {currentPlan !== "MAX" ? "Subscribe" : "Cancel"}
                    </Link>
                  ) : (
                    <Link href="/auth/login?sub-to-plan=Max">Subscribe</Link>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
