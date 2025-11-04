import Navigatorbar from "./component/navbar";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Image from "next/image";

export default function contactme() {
    return (
        <div className="bg-[url('/test-bg1.jpg')] bg-center h-screen">
         <Navigatorbar />
        <div className="pt-32 text-center text-4xl font-extrabold ">
        TEST CONTACT ME
        </div>
        <div className="pt-10 flex justify-center">
        <div className="pr-10">
        <EmailIcon color="disabled" className="mr-4 w-10 h-10"/> Test Email : test@example.com
        <br/><br/>
        <GitHubIcon color="disabled" className="mr-4 w-10 h-10"/> Test GitHub : testuser
        <br/><br/>
        <FacebookIcon color="disabled" className="mr-4 w-10 h-10"/> Test Facebook : Test User
        <br/><br/>
        <LocalPhoneIcon color="disabled" className="mr-4 w-10 h-10"/> Test Phone : 0000000000
        <br/><br/>
        <PhoneAndroidIcon color="disabled" className="mr-4 w-10 h-10"/> Test ID Line : testline
        <div className="pl-10 text-center md:hidden pt-12  w-full">
       <div className="justify-center flex pb-4">
       <Image src="/test-map.jpg" width={200} height={90} className="rounded-lg " alt={""} />
       </div>
     
            Test Address Line 1
            <br/>
            Test Address Line 2
            <br/>
            Test Postal Code
            </div>
            </div>
            
            <div className="mx-5 text-center hidden md:block">
            <div className="mb-5 w-64 h-32 bg-cover bg-[url('/test-map.jpg')] rounded-lg"></div> 
            Test Address Line 1
            <br/>
            Test Address Line 2
            <br/>
            Test Postal Code
            </div>
           
        </div>
        </div>
       
    )
}