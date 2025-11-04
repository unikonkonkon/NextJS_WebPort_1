import GitHubIcon from '@mui/icons-material/GitHub';
import Navigatorbar from "./component/navbar";
import { Link } from "@nextui-org/react";
export default function ProjectFlutter() {
  const products = [
    {
      id: 1,
      head: "Test Home Page",
      href: "#",
      imageSrc: "/Screenshot1.png",
      data: " ",
    },
    {
      id: 2,
      head: "Test Security Status Off",
      href: "#",
      imageSrc: "Screenshot2.png",
      data: " ",
    },
    {
      id: 3,
      head: "Test Cannot Repeat Status - Warning",
      href: "#",
      imageSrc: "Screenshot6.png",
      data: " ",
    },
    {
      id: 4,
      head: "Test Set PIN",
      href: "#",
      imageSrc: "Screenshot3.png",
      data: " ",
    },
    {
      id: 5,
      head: "Test Confirm PIN Again",
      href: "#",
      imageSrc: "Screenshot4.png",
      data: " ",
    },
    {
      id: 6,
      head: "Test Security Status On",
      href: "#",
      imageSrc: "Screenshot5.png",
      data: " ",
    },
   
  ];

  const productsClose = [
    {
      id: 1,
      head: "Test Security Status On",
      href: "#",
      imageSrc: "Screenshot5.png",
      data: " ",
    },
    {
      id: 2,
      head: "Test Enter Current PIN",
      href: "#",
      imageSrc: "/ScreenClose7.png",
      data: " ",
    },
    {
      id: 3,
      head: "Test Security Status Off",
      href: "#",
      imageSrc: "Screenshot2.png",
      data: " ",
    },  
  ];

  const productsLock = [
    {
      id: 1,
      head: "Test Open App - Lock Screen",
      href: "#",
      imageSrc: "ScreenClose8.png",
      data: " ",
    },
    {
      id: 2,
      head: "Test Wrong PIN Lock",
      href: "#",
      imageSrc: "ScreenClose9.png",
      data: " ",
    },
    {
      id: 3,
      head: "Test Home Page",
      href: "#",
      imageSrc: "/Screenshot1.png",
      data: " ",
    },
    {
      id: 4,
      head: "Test Security Status On",
      href: "#",
      imageSrc: "Screenshot5.png",
      data: " ",
    },  
  ];

  const productsOut = [
    {
      id: 1,
      head: "Test Press LockOut Button",
      href: "#",
      imageSrc: "ScreenOut10.png",
      data: " ",
    },
    {
      id:2,
      head: "Test Security Status Off",
      href: "#",
      imageSrc: "Screenshot6.png",
      data: " ",
    },   
  ];

  const productsStep = [
    {
      id: 1,
      head: "Test App First Page",
      href: "#",
      imageSrc: "Screenshot_1.png",
      data: " ",
    },
    {
      id:2,
      head: "Test Press Button to FormPage",
      href: "#",
      imageSrc: "Screenshot_2.png",
      data: " ",
    },   
    {
      id:3,
      head: "Test Step 1 Enter Data - Fill Both Fields",
      href: "#",
      imageSrc: "Screenshot_3.png",
      data: " ",
    }, 
    {
      id:4,
      head: "Test Display Entered Data",
      href: "#",
      imageSrc: "Screenshot_4.png",
      data: " ",
    }, 
    {
      id:5,
      head: "Test Display Success",
      href: "#",
      imageSrc: "Screenshot_5.png",
      data: " ",
    }, 
    {
      id:6,
      head: "Test Display List",
      href: "#",
      imageSrc: "Screenshot_6.png",
      data: " ",
    }, 
    {
      id:7,
      head: "Test Display List - More Than 1 Item",
      href: "#",
      imageSrc: "Screenshot_7.png",
      data: " ",
    }, 
  ];

  // 3.
  const productsAPI = [
    {
      id: 1,
      head: "Test Loading Data Page",
      href: "#",
      imageSrc: "flutterapi1.png",
      data: " ",
    },
    {
      id:2,
      head: "Test Display Data Page",
      href: "#",
      imageSrc: "flutterapi2.png",
      data: " ",
    },   
    {
      id:3,
      head: "Test Display Additional Data",
      href: "#",
      imageSrc: "flutterapi3.png",
      data: " ",
    }, 
  
  ];
  return (
    <div className="pb-10 bg-[url('/test-bg2.jpg')] bg-cover">
      <Navigatorbar />
      <div className="pt-28 text-center">
        <p className="text-3xl font-extrabold">Test Project Flutter </p>
      </div>
      <div className="px-10">
          <p className="pt-14 text-lg font-semibold">
           1. Test Mobile Application - Security Lock Pin system for enabling/disabling security <br/>
            When security is enabled, closing and reopening the app will show Lock Pin screen. Enter correct Pin to access the app.
          </p>
          <p className="pt-7 ">
            Test Text - Written using Dart and Flutter Framework, using hydrated_bloc to store Pin variables 
      
          </p>
           <div className="pt-5">
            <Link href="https://github.com/unikonkon/Flutter_Auth_Pin_Biometric">
            <GitHubIcon className="mr-4 w-10 h-10"/>   Test GitHub Project Mobile Application SecurityLockPin
            </Link>
      </div>
        </div>
       
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
           <p className="pb-8 text-gray-900 text-lg">
            Test Steps to Enable Security
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8 ">
        
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg') || '/test-image.jpg'}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between text-center">
                <div>
                  <h3 className="text-sm text-gray-700 ">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0 text-center" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="pb-8 text-gray-900 text-lg">
            Test Steps to Disable Security
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
          {productsClose.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg') || '/test-image.jpg'}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-6 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="pb-8 text-gray-900 text-lg">
            Test - When closing and reopening the app, LockSecurity screen appears if Security is enabled
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
          {productsLock.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg') || '/test-image.jpg'}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="pb-8 text-gray-900 text-lg">
            Test - When pressing Lock, PIN is removed and Security status is disabled
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
          {productsOut.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg') || '/test-image.jpg'}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. */}
      <div className="px-10">
          <p className="pt-20 text-lg font-semibold">
           2. Test Mobile Application - Form data entry using Flutter stepper, displaying data as List
            
          </p>
          <p className="pt-7 ">
            Test Text - Written using Dart and Flutter Framework, using bloc to store name variables 
      
          </p>
           <div className="pt-5">
            <Link href="https://github.com/unikonkon/Flutter_Stepper_Widget-">
            <GitHubIcon className="mr-4 w-10 h-10"/>   Test GitHub Project Mobile Application Stepper Flutter
            </Link>
      </div>
        </div>

        <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
           <p className="pb-8 text-gray-900 text-lg">
            Test Steps - Form Data Entry
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
        
          {productsStep.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg') || '/test-image.jpg'}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between text-center">
                <div>
                  <h3 className="text-sm text-gray-700 ">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0 text-center" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


            {/* 3. */}
        <div className="px-10">
          <p className="pt-20 text-lg font-semibold">
           3. Test Mobile Application - Fetching data from API and displaying as List
            
          </p>
          <p className="pt-7 ">
            Test Text - Written using Dart and Flutter Framework  
      
          </p>
           <div className="pt-5">
            <Link href="https://github.com/unikonkon/Flutter_API_DataList">
            <GitHubIcon className="mr-4 w-10 h-10"/>   Test GitHub Project Mobile Application API Data
            </Link>
      </div>
        </div>

        <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
           <p className="pb-8 text-gray-900 text-lg">
            Test App Display Screen
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
        
          {productsAPI.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg') || '/test-image.jpg'}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between text-center">
                <div>
                  <h3 className="text-sm text-gray-700 ">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0 text-center" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
