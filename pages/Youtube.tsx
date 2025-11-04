import Navigatorbar from "./component/navbar";
import { Link } from "@nextui-org/react";
export default function youtube() {
    const activity = [
        {
          id: 1,
          head: "Test CRYPTOCURRENCY",
          href: "https://www.youtube.com/watch?v=0JYZRPK4i2c",
          imageSrc: "/test-youtube1.jpg",
          data: " Test Text - Video about cryptocurrency using blockchain technology. Trading crypto for short-term hourly profits with 500 THB capital on bitkup app.",
        },
        {
          id: 2,
          head: "Test How to Transfer XLM Coin",
          href: "https://www.youtube.com/watch?v=QKPWYhhUXuo",
          imageSrc: "test-youtube2.jpg",
          data: "Test Text - Method to transfer money from bitkup app to binance by transferring XLM coin through Stellar Network (XLM)",
        },
        {
          id: 3,
          head: "Test University Graduation Project",
          href: "https://www.youtube.com/watch?v=UaEQB6p7Afs",
          imageSrc: "test-youtube3.jpg",
          data: "Test Text - Video explaining the process of university graduation project from start to presentation. Project is about marigold flower moisture removal machine using rotation technique with hot air.",
        },
        {
          id: 4,
          head: "Test Growing Marigold Flowers",
          href: "https://www.youtube.com/watch?v=lL9s28uVP_o",
          imageSrc: "test-youtube4.jpg",
          data: "Test Text - Video about marigold flower growing process, from planting steps to selling marigold flowers",
        },
        {
          id: 5,
          head: "Test Khao Yai Trip",
          href: "https://www.youtube.com/watch?v=z26bCJh0GN8&t",
          imageSrc: "test-youtube5.jpg",
          data: "Test Text - Video of trip with friends staying at The Great Khao Yai resort",
        },
        {
          id: 6,
          head: "Test Graduation Ceremony VLOG",
          href: "https://www.youtube.com/watch?v=SKz0cL-7Ezk&t",
          imageSrc: "test-youtube6.jpg",
          data: "Test Text - Vlog video of graduation ceremony at Suranaree University of Technology 2020",
        },
      ];
    return(
        <div className="bg-[url('/test-bg1.jpg')] bg-center">
      <Navigatorbar />
      <div className="pt-28 text-center">
        <p className="text-3xl font-extrabold">Test Video Content Creator </p>
        
        <p className="text-2xl pt-4">Test YouTube: FaradayBanana</p>
       <div className="">
       <Link href="https://www.youtube.com/@FaradayBanana" >
        <p className="text-sky-200 mt-3 rounded-lg bg-gray-800 px-3 py-1"> Test Open Youtube</p>
        </Link>
       </div>
       
      </div>
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {activity.map((activity) => (
            <div key={activity.id} className="group relative">
              <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                <img
                  src={activity.imageSrc}
                  className="w-full h-full object-center lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={activity.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {activity.head}
                    </a>
                  </h3>
                  <a className="mt-1 text-sm text-gray-500" href={activity.href}>{activity.data}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}