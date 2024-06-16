import Image from "next/image";
import {
  BellIcon,
  CalendarIcon,
  LayersIcon,
  MixerHorizontalIcon,
  StarIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { SegmentedControl, Switch } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import Tab from "@/components/tab";

const DynamicChartShare = dynamic(() => import("@/components/chart-share"), {
  ssr: false,
});
const DynamicChartInteraction = dynamic(
  () => import("@/components/chart-interaction"),
  {
    ssr: false,
  }
);
const DynamicChartTalkCount = dynamic(
  () => import("@/components/chart-talk-count"),
  {
    ssr: false,
  }
);
const DynamicChartTalkFrequency = dynamic(
  () => import("@/components/chart-talk-frequency"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#f0f3fc] min-h-screen pb-10">
      <div className="absolute left-0 right-0 h-80 bg-gradient-to-r from-[#078795] to-[#20b6b0] [mask-image:linear-gradient(black_65%,transparent_100%)]"></div>
      <div className="relative z-10 max-w-screen-md mx-auto pt-12 px-5">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white mr-2">
              <Image
                src="/images/avatar.jpg"
                alt="avatar"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-white">
              <p className="text-xl">Hello, Dotothy</p>
              <p className="text-sm">欢迎来到飞脑用户管理中心</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="h-8 w-8 flex justify-center items-center rounded-md border-white border text-white bg-[#75cdce] hover:bg-[#70c5c6] active:bg-[#57a3a5]">
              <CalendarIcon width={18} height={18} />
            </button>
            <button className="relative h-8 w-8 flex justify-center items-center rounded-md border-white border text-white bg-[#75cdce] hover:bg-[#70c5c6] active:bg-[#57a3a5]">
              <BellIcon width={18} height={18} />
              <div className="absolute h-3 w-3 -right-1.5 -top-1.5 rounded-full bg-red-500"></div>
            </button>
          </div>
        </div>
        <Tab />
      </div>
      <div className="relative z-10 max-w-screen-md mx-auto pt-4 px-5 grid grid-cols-[1fr_110px] grid-rows-10 gap-4">
        <div className="bg-white p-2.5 rounded-xl row-span-6">
          <div className="flex items-center mb-2">
            <LayersIcon width={20} height={20} className="mr-1" />
            <h3>BOT发言次数统计</h3>
          </div>
          <div className="flex flex-col">
            <SegmentedControl.Root
              defaultValue="week"
              className="self-center mb-2"
            >
              <SegmentedControl.Item value="day">Day</SegmentedControl.Item>
              <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
              <SegmentedControl.Item value="month">Month</SegmentedControl.Item>
            </SegmentedControl.Root>
            <div className="w-full min-h-40" style={{ height: "360px" }}>
              <DynamicChartTalkCount />
            </div>
          </div>
        </div>
        <div className="bg-white p-2.5 rounded-xl row-span-3">
          <div className="flex items-center">
            <MixerHorizontalIcon width={20} height={20} className="mr-1" />
            <h3>控制面板</h3>
          </div>
          <div className="mt-1 text-sm">Chatter</div>
          <Switch defaultChecked />
          <div className="mt-2 text-sm">Summay</div>
          <Switch defaultChecked />

          <a href="#" className="block text-center text-sm text-slate-500 mt-1">
            更多 &gt;
          </a>
        </div>

        <div className="bg-white p-2.5 rounded-xl text-center row-span-7">
          <div>
            <DynamicChartShare />
            <h5 className="text-sm font-semibold mb-1">分享总量</h5>
            <p className="text-xs text-slate-500 mb-0.5">纯文本/图文类</p>
            <p className="text-xs text-slate-500">26/28</p>
          </div>
          <div className="mt-2.5">
            <DynamicChartInteraction />
            <h5 className="text-sm font-semibold mb-1">交互统计</h5>
            <p className="text-xs text-slate-500 mb-0.5">点赞/评论/分享</p>
            <p className="text-xs text-slate-500">26/28/60</p>
          </div>
        </div>
        <div className="bg-white p-2.5 rounded-xl row-span-4">
          <div className="flex items-center mb-2">
            <LayersIcon width={20} height={20} className="mr-1" />
            <h3>BOT发言频段统计</h3>
          </div>
          <div className="flex flex-col">
            <SegmentedControl.Root
              defaultValue="day"
              className="self-center mb-2"
            >
              <SegmentedControl.Item value="day">Day</SegmentedControl.Item>
              <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
              <SegmentedControl.Item value="month">Month</SegmentedControl.Item>
            </SegmentedControl.Root>
            <div className="w-full min-h-40" style={{ height: "200px" }}>
              <DynamicChartTalkFrequency />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto mt-4 px-5">
        <a
          href="#"
          className="rounded-xl flex items-center p-2.5 text-lg bg-white active:bg-gray-200"
        >
          <StarIcon width={20} height={20} className="mr-1" />
          用户使用手册
          <ChevronRightIcon width={20} height={20} className="ml-auto" />
        </a>
      </div>
    </main>
  );
}
