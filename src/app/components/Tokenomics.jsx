import Image from "next/image";
const Tokenomics = () => {
    return (
        <div className="w-full tokenomics 2xl:container mx-auto px-12 max-sm:py-70 relative">
            <Image src="/images/token-img.png" alt="alt" width={700} height={700} className="absolute z-2 top-[85%] md:top-[-13vw] left-[10%]  md:w-[80%]"/>
            <Image src="/images/token-stand.png" alt="alt" width={700} height={700} className="absolute top-[-12.5vw] right-[0%] md:w-[32%]"/>
            <div className="flex flex-col md:w-[25%] text-center mt-30">
                <div className="bg-[#CF8EFF] p-12 rounded-2xl rotate-[6.93deg]">
                    <h3 className="text-white mama text-4xl mb-2">Renounced</h3>
                    <p className="text-black coconut text-2xl">Contract</p>
                </div>
                <div className="bg-[#FFFFFF] p-12 rounded-2xl rotate-[-3.99deg] border-2 border-[#370D57] center-shadow  relative z-2">
                    <h3 className="text-[#7154C5] mama text-4xl mb-2">Burnt</h3>
                    <p className="text-black coconut text-2xl">Liquidity</p>
                </div>
                <div className="bg-[#7C66B9] p-12 rounded-2xl rotate-[-12.18deg]">
                    <h3 className="mama text-4xl mb-2">0 / 0%</h3>
                    <p className="text-black coconut text-2xl">Buy/Sell Tax</p>
                </div>
            </div>
        </div>
    )
}
export default Tokenomics;