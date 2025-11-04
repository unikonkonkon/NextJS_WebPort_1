import GitHubIcon from '@mui/icons-material/GitHub';
import Navigatorbar from "./component/navbar";
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "@nextui-org/react";
export default function ProjectReact() {

  const reactCRUD = [ 
    {
      id: 7,
      head: "Test Display Data",
      href: "#",
      imageSrc: "ReactCURD1.png",
      data: " ",
    },
    {
      id: 8,
      head: "Test Create Data",
      href: "#",
      imageSrc: "/ReactCURD2.png",
      data: " ",
    },
    {
      id: 9,
      head: "Test Added Data",
      href: "#",
      imageSrc: "ReactCURD3.png",
      data: " ",
    }, 
    {
      id: 10,
      head: "Test Edit Data",
      href: "#",
      imageSrc: "ReactCURD4.png",
      data: " ",
    },
    {
      id: 11,
      head: "Test Updated Data",
      href: "#",
      imageSrc: "ReactCURD5.png",
      data: " ",
    },
    {
      id: 12,
      head: "Test Delete Data",
      href: "#",
      imageSrc: "ReactCURD6.png",
      data: " ",
    },
    {
      id: 13,
      head: "Test Deleted Data",
      href: "#",
      imageSrc: "ReactCURD7.png",
      data: " ",
    },  
];

  const products = [
    {
      id: 1,
      head: "Test Open XAMPP Start MySQL",
      href: "#",
      imageSrc: "/ReactJS1.png",
      data: " ",
    },
    {
      id: 2,
      head: "Test Create MySQL Variables",
      href: "#",
      imageSrc: "ReactJS2.png",
      data: " ",
    },
    {
      id: 3,
      head: "Test Open NodeJS Code",
      href: "#",
      imageSrc: "ReactJS3.png",
      data: " ",
    },
    {
      id: 4,
      head: "Test Run NodeJS with nodemon app.js",
      href: "#",
      imageSrc: "ReactJS4.png",
      data: " ",
    },
  ];


  const dog = [
    {
      id: 1,
      head: "Test Login Page",
      href: "#",
      imageSrc: "/dog1.png",
      data: " ",
    },
    {
      id: 2,
      head: "Test Username Page",
      href: "#",
      imageSrc: "dog2.png",
      data: " ",
    },
    {
      id: 3,
      head: "Test Display Dog Images",
      href: "#",
      imageSrc: "dog3.png",
      data: " ",
    }
  ];

  const runProducts = [
    {
      id: 1,
      head: "Test Login Page",
      href: "#",
      imageSrc: "ReactJS11.png",
      data: " ",
    },
    {
      id: 2,
      head: "Test Enter Email and Password",
      href: "#",
      imageSrc: "/ReactJS12.png",
      data: " ",
    },
    {
      id: 3,
      head: "Test Database with Data",
      href: "#",
      imageSrc: "ReactJS121.png",
      data: " ",
    },  
    {
        id: 4,
        head: "Test Login Success",
        href: "#",
        imageSrc: "ReactJS13.png",
        data: " ",
      },
      {
        id: 5,
        head: "Test Login Failed",
        href: "#",
        imageSrc: "/ReactJS14.png",
        data: " ",
      },
      {
        id: 6,
        head: "Test User Page",
        href: "#",
        imageSrc: "ReactJS15.png",
        data: " ",
      },  
  ];
  
  const runProductsSignUp = [ 
      {
        id: 7,
        head: "Test SignUp Page with name, email, password",
        href: "#",
        imageSrc: "ReactJS16.png",
        data: " ",
      },
      {
        id: 8,
        head: "Test Add Data Success",
        href: "#",
        imageSrc: "/ReactJS17.png",
        data: " ",
      },
      {
        id: 9,
        head: "Test Database with Added Data",
        href: "#",
        imageSrc: "ReactJS18.png",
        data: " ",
      }, 
      {
        id: 10,
        head: "Test Login with Latest Added Data",
        href: "#",
        imageSrc: "ReactJS19.png",
        data: " ",
      },
      {
        id: 11,
        head: "Test Login Success with Latest Data",
        href: "#",
        imageSrc: "ReactJS20.png",
        data: " ",
      },  
  ];

  return (
    <div className="pb-10 bg-[url('/test-bg2.jpg')] bg-cover">
      <Navigatorbar />
      <div className="pt-28 text-center">
        <p className="text-3xl font-extrabold">Test Project ReactJS </p>
      </div>

      {/* 1. */}
      <div className="px-10">
          <p className="pt-7 text-lg">
          <p className="text-xl pb-3 font-semibold">1. Test Web Rest API CRUD</p>
          Test Text - CRUD operations: Create, Read, Update, Delete<br/>
            Test Text - Using API service from https://www.melivecode.com/
          </p>
          <p className="pt-7 text-lg">
            Test Text - Written using JavaScript and ReactJS Framework  
          </p>
         <div className="pt-8">
            <Link href="https://github.com/unikonkon/React_CRUD_RestAPI">
            <GitHubIcon className="mr-4 w-10 h-10"/>   Test GitHub Web Project
            </Link>
         </div>
         <div className="pt-3">
            <Link href="https://react-crud-rest-api.vercel.app/">
            <LanguageIcon className="mr-4 w-10 h-10 text-sky-600"/>
            <p className="text-sky-600">
            Test Link Web Project 
            </p> 
            </Link>
         </div>
        </div>
       
      <div className="pb-12 sm:pb-10">
           <p className="pb-8 text-gray-900 text-lg px-10 pt-8">
            Test Example Web RestAPI CRUD
            </p>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 xl:gap-x-4 px-8">
        
          {reactCRUD.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full   bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg')}
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


        {/* 2. */}
        <div className="px-10">
          <p className="pt-7 text-lg">
          <p className="text-xl pb-3 font-semibold">2. Test Web Save IMG Dog</p>
          Test Text - Web application that displays random dog images from API, allows saving, deleting, loading new images, and shows all saved images
           </p>
          <p className="pt-7 text-lg">
            Test Text - Written using JavaScript and ReactJS Framework  
          </p>
         <div className="pt-8">
            <Link href="https://github.com/unikonkon/react_save_dog_app">
            <GitHubIcon className="mr-4 w-10 h-10"/>   Test GitHub Web Project Save IMG Dog
            </Link>
         </div>
         <div className="pt-3">
            <Link href="https://react-savedogapp.vercel.app/">
            <LanguageIcon className="mr-4 w-10 h-10 text-sky-600"/>
            <p className="text-sky-600">
            Test Link Web Project Save IMG Dog
            </p> 
            </Link>
         </div>
        </div>
       
      <div className="pb-12 sm:pb-10">
           <p className="pb-8 text-gray-900 text-lg px-10 pt-8">
            Test Example Web Save IMG Dog
            </p>
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 xl:gap-x-4 px-8">
        
          {dog.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full   bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg')}
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
          <p className="pt-10 text-lg">
         <p className="text-xl pb-3 font-semibold">3. Test Web LogIn  </p>
         Test Text - Login system connected to MySQL database. After login, user can access User page. SignUp page allows registration, and users can login with registered credentials to access User page.
          </p>
          <p className="pt-7 ">
            Test Text - Written using JavaScript, ReactJS Framework, NodeJS for backend, and MySQL database 
          </p>
         <div className="pt-5">
            <Link href="https://github.com/unikonkon/ReactJS_Login_API_MySQL">
            <GitHubIcon className="mr-4 w-10 h-10"/>   Test GitHub Web Project
            </Link>
         </div>
         <div className="pt-2">
            <Link href="https://github.com/unikonkon/ReactJS_Login_API_MySQL/tree/main/BlackEnd_NodeJs">
            <GitHubIcon className="mr-4 w-10 h-10"/>   Test GitHub Web Project Code NodeJS BackEnd
            </Link>
         </div>
         <div className="pt-8">
            <Link href="https://react-js-login-api-mysql.vercel.app/">
            <LanguageIcon className="mr-4 w-10 h-10 text-sky-600"/>
            <p className="text-sky-600">
            Test Link Web Project 
            </p>
            </Link>
            <p className="pt-2 ">
            ***Test Note - The web link above cannot login to User page and cannot SignUp because MySQL database is not running and NodeJS backend is not started
          </p>
         </div>
        </div>
       
      <div className="pb-12 sm:pb-10">
           <p className="pb-8 text-gray-900 text-lg px-10 pt-16">
            Test Example Web - Running NodeJS database and Starting MySQL
            </p>
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-4 px-8">
        
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full   bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg')}
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

      <div className="pb-20 sm:pb-16">
           <p className="pb-8 text-gray-900 text-lg px-10 pt-16">
           Test Example Web - When running NodeJS and opening MySQL
            </p>
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-4 px-8">
        
          {runProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full   bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg')}
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

        <div className="pt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-4 px-8">
        
          {runProductsSignUp.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full   bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                <img
                  src={product.imageSrc.replace(/\.(png|jpg|jpeg)$/i, '-test.jpg')}
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
