import {cn} from '../../lib/utils.jsx'
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

import { BackgroundBeams } from "../ui/background-beams";



import React from "react";
import { BackgroundLines } from '../ui/background-lines.jsx';

const transition = {
  duration: 100,
  ease: "linear",
};

 const AppHeroUi = ({
  pathLengths,
  title,
  description,
  className
}) => {
  return (
    (<div className={cn("sticky top-80", className)}>
      {/* <p
        className="text-lg md:text-7xl absolute z-20 top-[50%] left-[50%] translate-x-[-50%] font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title }
      </p>
      <p
        className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description }
      </p> */}
      {/* <div
        className="w-full h-[890px] -top-60 md:-top-68  flex items-center justify-center bg-red-transparent absolute ">
        <button
          className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs  w-fit mx-auto ">
          ui.aceternity.com
        </button>
      </div> */}
     

      <svg
       
        height="890"
        viewBox="0 120 1000 1300"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute -top-60  md:-top-68 w-full flex justify-center items-center">
        <motion.path
          d="m0 0 9 1 7 5 5 11-1 7-6 8-12 6-51 19-20 7-19 7-37 14-42 15-45 17-40 14-28 11-24 9-29 10-25 10-16 7-13 8-9 7-12 11-8 8-10 14-10 19-5 13-3 10-3 20v21l2 9 1 11 5 15 4 9 8 16 13 19 1 3 4 2 10 10 17 12 14 8 18 7 6 1 3 2 14 1 3 1h26l10-2h9l7-3 15-4 64-24 29-10 42-16 42-15 45-17 74-27 21-5 17-3h27l22 3 16 4 17 6 25 13 13 9 13 10 8 8 11 14 10 14 12 23 7 20 5 21 3 20v18l-5 28-6 18-7 16-8 15-8 12-11 14-18 18-19 13-18 10-18 8-48 17-61 23-32 11-36 14-44 16-17 6-29 11-55 20-34 13h-12l-6-4-4-5-1-2v-7l4-8 9-4 15-6 17-6 29-11 55-20 29-11 47-17 31-12 28-10 31-11 33-13 44-15 23-12 16-11 8-6 7-8 7-7 10-15 6-11 7-20 4-16 1-19v-11l-1-17-2-7-5-19-8-18-10-16-14-15v-2l-4-2-10-9-20-12-12-6-11-4-9-2-5-2-20-1h-17l-6 1h-8l-17 4-42 16-31 11-23 8-27 11-46 16-36 14-36 13-31 11-25 10-16 5-20 4-13 1h-42l-9-3-9-1-21-7-19-10-13-8-17-13-14-14-11-14-9-14-11-21-7-19-4-17-2-19v-22l2-22 6-21 9-21 9-17 11-16 12-13 8-7 9-9 15-10 23-12 33-13 43-16 26-10 63-23 26-10 56-20 40-15 48-17 34-13z"
          stroke="white"
          transform="translate(614,144)"
          strokeWidth="4"
          fill="#4F183B"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths.length>0?pathLengths[0]:null,
          }}
          transition={transition} />
        <motion.path
        transform="translate(639,219)"
          d="m0 0h12l6 3 4 7 2 5-1 6-7 8-5 4-16 7-29 10-33 12-29 11-51 18-25 10-36 13-73 27-36 13-41 16-13 7-11 11-8 15-3 12-1 12 4 17 5 10 6 9 8 8 16 8 12 4h16l26-8 42-15 29-11 24-9 26-9 37-14 27-10 42-15 41-16 41-14 33-13 13-4h13l5 4 5 14-2 5-4 6-8 5-24 9-20 8-26 9-28 10-44 17-29 10-24 9-46 17-33 12-29 11-30 11-26 9-9 3-7 3-14 1h-17l-13-1-15-6-16-8-10-7-6-5-11-14-8-16-5-13-3-21 1-16 3-15 5-12 7-13 7-9 13-13 15-9 17-8 31-12 27-10 34-12 36-14 25-9 26-9 31-12 31-11 29-10 26-10 27-10 34-12z"
          stroke="white"
          strokeWidth="4"
          fill="#4F183B"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[1],
          }}
          transition={transition} />
        <motion.path
        transform="translate(698,531)"
          d="m0 0 24 1 20 6 16 8 13 10 8 9 9 13 8 16 3 11 2 13v13l-2 11-1 7-4 13-9 16-12 13-5 5-8 7-10 6-20 8-40 15-39 14-31 12-37 13-37 14-15 6-12 4h-11l-7-6-3-9 1-9 4-5 19-8 24-9 79-29 29-11 53-19 29-12 13-9 7-8 4-6 5-13 1-10v-12l-2-12-5-12-4-6-8-9-10-7-11-5-13-2h-9l-16 2-29 10-39 14-28 11-29 10-70 26-39 14-25 10-23 8-41 15-28 11-14 5-11 3-10-5-5-8-1-3v-8l4-6 7-4 12-5 27-10 37-14 17-6 70-26 26-9 45-17 42-15 34-13 30-11 36-12 7-2z"
          stroke="white"
          strokeWidth="4"
          fill="#4F173B"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[2],
          }}
          transition={transition} />
        <motion.path
        transform="translate(706,612)"
          d="m0 0 9 3 4 4 2 7v9l-3 5-8 5-17 6-39 15-28 10-44 16-17 7-29 10-43 16-15 6-26 9-30 11-20 8-26 9-30 11-34 13-5 2-6 1h-8l-6-4-4-6-1-9 2-6 5-4 16-7 36-14 29-10 21-8 17-6 20-8 42-15 42-16 19-7 29-10 39-15 67-24 25-10 9-3z"
          stroke="white"
          strokeWidth="4"
          fill="#D04C54"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[3],
          }}
          transition={transition} />
        <motion.path 
        // className={'dark:stroke-black'}
        transform="translate(522,344)"
          d="m0 0h7l9 6 5 9v7l-7 9-9 5-15 6-40 14-41 16-41 14-21 8-22 9-33 11-8 2-5-1-10-4-3-8v-10l3-6 5-4 9-4 26-9 45-17 27-10 17-6 48-18 22-8 29-10z"
          stroke="white"
          strokeWidth="4"
          fill="#D04C54"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition} />
  <motion.path
  transform="translate(668,290)"
          d="m0 0h7l6 3 4 5 3 6v11l-7 7-10 5-33 12-26 10-9 3h-10l-5-2-7-8-1-6 1-9 4-5 14-7 28-11z"
          stroke="white"
          strokeWidth="4"
          fill="#50183C"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[5],
          }}
          transition={transition} />  
          <motion.path
          transform="translate(436,790)"
          d="m0 0h9l5 2 4 5 3 8v6l-6 8-10 5-7 3-13 4-31 11-15 6-11 1-6-2-4-4-3-9 1-8 4-5 12-6 28-11 36-13z"
          stroke="white"
          strokeWidth="4"
          fill="#51183C"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[6],
          }}
          transition={transition} />
        {/* Gaussian blur for the background paths */}

        {/* <path
    
          d="m0 0 9 1 7 5 5 11-1 7-6 8-12 6-51 19-20 7-19 7-37 14-42 15-45 17-40 14-28 11-24 9-29 10-25 10-16 7-13 8-9 7-12 11-8 8-10 14-10 19-5 13-3 10-3 20v21l2 9 1 11 5 15 4 9 8 16 13 19 1 3 4 2 10 10 17 12 14 8 18 7 6 1 3 2 14 1 3 1h26l10-2h9l7-3 15-4 64-24 29-10 42-16 42-15 45-17 74-27 21-5 17-3h27l22 3 16 4 17 6 25 13 13 9 13 10 8 8 11 14 10 14 12 23 7 20 5 21 3 20v18l-5 28-6 18-7 16-8 15-8 12-11 14-18 18-19 13-18 10-18 8-48 17-61 23-32 11-36 14-44 16-17 6-29 11-55 20-34 13h-12l-6-4-4-5-1-2v-7l4-8 9-4 15-6 17-6 29-11 55-20 29-11 47-17 31-12 28-10 31-11 33-13 44-15 23-12 16-11 8-6 7-8 7-7 10-15 6-11 7-20 4-16 1-19v-11l-1-17-2-7-5-19-8-18-10-16-14-15v-2l-4-2-10-9-20-12-12-6-11-4-9-2-5-2-20-1h-17l-6 1h-8l-17 4-42 16-31 11-23 8-27 11-46 16-36 14-36 13-31 11-25 10-16 5-20 4-13 1h-42l-9-3-9-1-21-7-19-10-13-8-17-13-14-14-11-14-9-14-11-21-7-19-4-17-2-19v-22l2-22 6-21 9-21 9-17 11-16 12-13 8-7 9-9 15-10 23-12 33-13 43-16 26-10 63-23 26-10 56-20 40-15 48-17 34-13z"
          stroke="white"
          transform="translate(614,144)"
          strokeWidth="2"
          fill="#4F183B"
          pathLength={1}
          filter="url(#blurMe)" />
        <path
        transform="translate(639,219)"
          d="m0 0h12l6 3 4 7 2 5-1 6-7 8-5 4-16 7-29 10-33 12-29 11-51 18-25 10-36 13-73 27-36 13-41 16-13 7-11 11-8 15-3 12-1 12 4 17 5 10 6 9 8 8 16 8 12 4h16l26-8 42-15 29-11 24-9 26-9 37-14 27-10 42-15 41-16 41-14 33-13 13-4h13l5 4 5 14-2 5-4 6-8 5-24 9-20 8-26 9-28 10-44 17-29 10-24 9-46 17-33 12-29 11-30 11-26 9-9 3-7 3-14 1h-17l-13-1-15-6-16-8-10-7-6-5-11-14-8-16-5-13-3-21 1-16 3-15 5-12 7-13 7-9 13-13 15-9 17-8 31-12 27-10 34-12 36-14 25-9 26-9 31-12 31-11 29-10 26-10 27-10 34-12z"
          stroke="#4F173B"
          strokeWidth="14"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)" />
        <path
         transform="translate(698,531)"
          d="m0 0 24 1 20 6 16 8 13 10 8 9 9 13 8 16 3 11 2 13v13l-2 11-1 7-4 13-9 16-12 13-5 5-8 7-10 6-20 8-40 15-39 14-31 12-37 13-37 14-15 6-12 4h-11l-7-6-3-9 1-9 4-5 19-8 24-9 79-29 29-11 53-19 29-12 13-9 7-8 4-6 5-13 1-10v-12l-2-12-5-12-4-6-8-9-10-7-11-5-13-2h-9l-16 2-29 10-39 14-28 11-29 10-70 26-39 14-25 10-23 8-41 15-28 11-14 5-11 3-10-5-5-8-1-3v-8l4-6 7-4 12-5 27-10 37-14 17-6 70-26 26-9 45-17 42-15 34-13 30-11 36-12 7-2z"
          stroke="#4F173B"
          strokeWidth="14"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)" />
        <path

        transform="translate(706,612)" 
         d="m0 0 9 3 4 4 2 7v9l-3 5-8 5-17 6-39 15-28 10-44 16-17 7-29 10-43 16-15 6-26 9-30 11-20 8-26 9-30 11-34 13-5 2-6 1h-8l-6-4-4-6-1-9 2-6 5-4 16-7 36-14 29-10 21-8 17-6 20-8 42-15 42-16 19-7 29-10 39-15 67-24 25-10 9-3z"
          stroke="#D04C54"
          strokeWidth="14"
          fill="#D04C54"
          pathLength={1}
          filter="url(#blurMe)" />
        <path
            transform="translate(522,344)"   
          d="m0 0h7l9 6 5 9v7l-7 9-9 5-15 6-40 14-41 16-41 14-21 8-22 9-33 11-8 2-5-1-10-4-3-8v-10l3-6 5-4 9-4 26-9 45-17 27-10 17-6 48-18 22-8 29-10z"
          stroke="#D04C54"
          strokeWidth="14"
          fill="#D04C54"
          pathLength={0}
          filter="url(#blurMe)" />
   <path
    transform="translate(668,290)"
          d="m0 0h7l6 3 4 5 3 6v11l-7 7-10 5-33 12-26 10-9 3h-10l-5-2-7-8-1-6 1-9 4-5 14-7 28-11z"
          stroke="#50183C"
          strokeWidth="14"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)" />
   <path
    transform="translate(436,790)"
          d="m0 0h9l5 2 4 5 3 8v6l-6 8-10 5-7 3-13 4-31 11-15 6-11 1-6-2-4-4-3-9 1-8 4-5 12-6 28-11 36-13z"
          stroke="#51183C"
          strokeWidth="14"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)" /> */}

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>

  
    </div>)
  )}



 function AppHero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.3, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.25, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [1, 1.2]);
  const pathLengthSix = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthSeven = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (

    (
    //   <BackgroundLines className="  w-full flex-col px-4">
    // {/* <div
    //   className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
    //   ref={ref}> */}
    //           {/* <BackgroundBeams /> */}
    //   <AppHeroUi
    //   title={'Saylani Tech Limited'}
    //   description={'Transforming Businesses with Custom Software Solutions and Innovative Technology Expertise.'}
    //     pathLengths={[
    //       pathLengthFirst,
    //       pathLengthSecond,
    //       pathLengthThird,
    //       pathLengthFourth,
    //       pathLengthFifth,
    //       pathLengthSix,
    //       pathLengthSeven
    //     ]} />

    // {/* </div> */}
    // </BackgroundLines>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-r to-[white]  from-[#D04C54]  dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Saylani Tech Limited.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-[#ffffffd2]  dark:text-neutral-400 text-center">
      Transforming Businesses with Custom Software Solutions and Innovative Technology Expertise.
      </p>
    </BackgroundLines>
    )
  );
}

export default AppHero;
