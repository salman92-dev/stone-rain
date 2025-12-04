import Image from "next/image";
const Slide = () => { 
    return(
        <div className="mt-[-21vw] md:mt-[-7vw] relative z-10">
                <Image src="/images/slide.svg" alt="alt" width={200} height={200} className="hidden md:block w-full"/>
                <Image src="/images/strip.png" alt="alt" width={400} height={400} className="md:hidden w-full"/>
        </div>
    )
}
export default Slide;