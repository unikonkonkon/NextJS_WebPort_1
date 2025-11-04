
import Navigatorbar from "./component/navbar";

export default function Activity() {
  const activity = [
    {
      id: 1,
      head: "Test A-MATH Competition",
      href: "#",
      imageSrc: "/test-Activity1.jpg",
      data: "Test Text - Thai University Games (2018). Competition about planning + - * / numbers using basic equation principles. Win/loss determined by points scored in each equation.",
    },
    {
      id: 2,
      head: "Test New Student Welcome Activity SUT",
      href: "#",
      imageSrc: "test-Activity2.jpg",
      data: "Test Text - Organizing various activities for the university for first-year students",
    },
    {
      id: 3,
      head: "Test New Student Welcome Team SUT",
      href: "#",
      imageSrc: "test-Activity3.jpg",
      data: "Test Text - New student welcome team of the university, providing assistance to new first-year students",
    },
    {
      id: 4,
      head: "Test SUT Camp",
      href: "#",
      imageSrc: "test-Activity4.jpg",
      data: "Test Text - Attending camp to train leadership skills and practice various activities organized by the university",
    },
    {
      id: 5,
      head: "Test SUT STARTUP CAMP",
      href: "#",
      imageSrc: "test-Activity5.jpg",
      data: "Test Text - Activity to train entrepreneurship skills and learn hands-on practice in developing new business ideas",
    },
    {
      id: 6,
      head: "Test Robot Testing",
      href: "#",
      imageSrc: "test-Activity6.jpg",
      data: "Test Text - Internship about robot installation, going off-site to install robots for the university",
    },
  ];
  return (
    <div className="bg-[url('/test-bg1.jpg')] bg-center ">
      <Navigatorbar />
      <div className="pt-28 text-center">
        <p className="text-3xl font-extrabold">Test Activity </p>
      </div>
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {activity.map((activity) => (
            <div key={activity.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={activity.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg') || '/test-image.jpg'}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={activity.href}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {activity.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{activity.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
