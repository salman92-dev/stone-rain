"use client"
import React from 'react';

const About = () => {
    return (
        <div className="about relative w-full bg-[#A140E9] px-0 pb-80 md:px-8 md:pb-40 2xl:container 2xl:mx-auto">
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes drift {
                    0% { transform: translateX(0px); }
                    50% { transform: translateX(30px); }
                    100% { transform: translateX(0px); }
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .cloud-1 {
                    animation: drift 8s ease-in-out infinite;
                }
                
                .cloud-2 {
                    animation: drift 10s ease-in-out infinite reverse;
                }
                
                .eggs {
                    animation: bounce 3s ease-in-out infinite;
                }
                
                .about-image {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .about-image:nth-child(1) { animation-delay: 0.1s; }
                .about-image:nth-child(2) { animation-delay: 0.2s; }
                .about-image:nth-child(3) { animation-delay: 0.3s; }
                .about-image:nth-child(4) { animation-delay: 0.4s; }
                .about-image:nth-child(5) { animation-delay: 0.5s; }
                
                .about-heading {
                    animation: scaleIn 1s ease-out 0.3s forwards;
                    opacity: 0;
                }
                
                .about-main {
                    animation: fadeInUp 1.2s ease-out 0.6s forwards, float 4s ease-in-out 1.8s infinite;
                    opacity: 0;
                }
                
                .about-mobile {
                    animation: fadeInUp 0.8s ease-out 0.4s forwards;
                    opacity: 0;
                }
            `}</style>
            
            <img src="/images/cloud-1.png" alt="alt" className="absolute left-0 top-260 w-[60%] md:top-100 md:w-[25%]"/>
            <img src="/images/cloud-2.png" alt="alt" className="absolute right-0 top-130 md:top-100 w-[50%] md:w-[25%]"/>
            <img src="/images/eggs.png" alt="alt" className="eggs absolute top-130 w-[30%] md:left-60 md:top-60 md:w-[10%]"/>

            <div className="hidden md:flex flex items-center">
                <img src="/images/about-1.png" alt="alt" className="about-image mt-[-5vw] w-[18%]"/>
                <img src="/images/about-2.png" alt="alt" className="about-image mt-[-5vw] w-[18%]"/>
                <img src="/images/about-heading.png" alt="alt" className="about-heading mt-[-15vw] w-[35%]"/>
                <img src="/images/about-3.png" alt="alt" className="about-image mt-[-5vw] w-[18%]"/>
                <img src="/images/about-4.png" alt="alt" className="about-image mt-[-5vw] w-[18%]"/>
            </div>
            
            <div className="flex w-full flex-col items-center md:hidden">
                <img src="/images/about-heading.png" alt="alt" className="about-heading mt-[-15vw] w-[80%]"/>
                <div className="flex items-center gap-2">
                    <img src="/images/about-mobile.png" alt="alt" className="about-mobile mt-[-2vw] w-[120%]"/>
                </div>
            </div>
            
            <img src="/images/about-main.svg" alt="alt" className="about-main mx-auto w-full max-sm:ml-3 max-sm:pt-60 md:w-[45%]"/>
        </div>
    );
};

export default About;