import Image from "next/image";
import "../styles.css";
const About = () => {
    return (
        <div className="about 2xl:container mx-auto px-2 md:px-8 bg-[#A140E9] w-full relative pb-60 md:pb-40">
                <Image src="/images/cloud-1.png" alt="alt" width={200} height={200} className="w-[40%] md:w-[25%] absolute left-0 top-235 md:top-100"/>
                <Image src="/images/cloud-2.png" alt="alt" width={200} height={200} className="w-50%] absolute right-0 top-100"/>
                <Image src="/images/eggs.png" alt="alt" width={200} height={200} className="w-[30%] md:w-[10%] absolute md:left-60 top-110 md:top-60"/>

            <div className="hidden md:flex flex items-center">
                <Image src="/images/about-1.png" alt="alt" width={200} height={200} className="w-[18%] mt-[-5vw]"/>
                <Image src="/images/about-2.png" alt="alt" width={200} height={200} className="w-[18%] mt-[-5vw]"/>
                <Image src="/images/about-heading.png" alt="alt" width={200} height={200} className="w-[35%] mt-[-15vw]"/>
                <Image src="/images/about-3.png" alt="alt" width={200} height={200} className="w-[18%] mt-[-5vw]"/>
                <Image src="/images/about-4.png" alt="alt" width={200} height={200} className="w-[18%] mt-[-5vw]"/>
            </div>
            <div className="w-full flex md:hidden flex-col items-center">
                <Image src="/images/about-heading.png" alt="alt" width={200} height={200} className="w-[80%] mt-[-15vw]"/>
                <div className="flex items-center gap-2">
                    <Image src="/images/about-1.png" alt="alt" width={200} height={200} className="w-[50%] mt-[-2vw]"/>
                    <Image src="/images/about-2.png" alt="alt" width={200} height={200} className="w-[50%] mt-[-2vw]"/>
                </div>
            </div>
                <Image src="/images/about-main.svg" alt="alt" width={200} height={200} className="max-sm:pt-60 w-full md:w-[45%] mx-auto"/>
        </div>
    )
}
export default About;