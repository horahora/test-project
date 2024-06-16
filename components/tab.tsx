"use client";

import { useState } from "react";
import { LayersIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/themes";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex justify-center gap-2.5 text-nowrap leading-8 mt-2 mb-4 *:px-8 *:rounded-full *:relative *:after:absolute *:after:top-full *:after:left-2/4 *:after:text-gray-600 *:after:border-b-[8px] *:after:border-l-[8px] *:after:border-r-[8px] *:after:border-[transparent] *:after:mt-2 *:after:-ml-2">
        <button
          className={
            activeTab === 0
              ? "bg-white text-[var(--accent-color)] font-semibold after:!border-b-[white]"
              : "bg-[#bce3e7]"
          }
          onClick={() => setActiveTab(0)}
        >
          极简版
        </button>
        <button
          className={
            activeTab === 1
              ? "bg-white text-[var(--accent-color)] font-semibold after:!border-b-[white]"
              : "bg-[#bce3e7]"
          }
          onClick={() => setActiveTab(1)}
        >
          标准版
        </button>
        <button
          className={
            activeTab === 2
              ? "bg-white text-[var(--accent-color)] font-semibold after:!border-b-[white]"
              : "bg-[#bce3e7]"
          }
          onClick={() => setActiveTab(2)}
        >
          专业版
        </button>
      </div>
      {activeTab === 0 && (
        <div className="p-2.5 bg-white rounded-xl">
          <div className="flex items-center mb-2">
            <LayersIcon width={20} height={20} className="mr-1" />
            <h3>卡片解析基本信息</h3>
          </div>
          <div>
            <p className="text-sm text-[var(--accent-color)]">
              version: V1.0.0
            </p>
            <Separator size="4" className="mt-2" />
            <div className="flex justify-around items-center mt-2">
              <div>
                <div className="text-gray-500 text-sm">Alive Time</div>
                <div className="text-lg font-semibold">11.25M</div>
              </div>
              <Separator orientation="vertical" size="2" />
              <div>
                <div className="text-gray-500 text-sm">Announce</div>
                <div className="text-lg font-semibold">354</div>
              </div>
              <Separator orientation="vertical" size="2" />
              <div>
                <div className="text-gray-500 text-sm">Target</div>
                <div className="text-lg font-semibold text-[var(--accent-color)]">
                  3M
                </div>
              </div>
              <Separator orientation="vertical" size="2" />
              <div>
                <div className="text-gray-500 text-sm">Placeholder</div>
                <div className="text-lg font-semibold">600</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 1 && (
        <div className="p-2.5 bg-white rounded-xl">标准版tab内容</div>
      )}
      {activeTab === 2 && (
        <div className="p-2.5 bg-white rounded-xl">专业版tab内容</div>
      )}
    </div>
  );
}
