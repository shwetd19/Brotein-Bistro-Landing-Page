// const About = () => {
//   return (
//     <section className="w-full h-screen snap-start  py  q-20  ">
//       <div className="grid grid-cols-2 grid-rows-2 gap-4 p-20">
//         {/* <div className=" ">
//           <h1 className="text-6xl uppercase leading-tight col-span-12">
//             Empowering your
//             <br /> fitness journey
//           </h1>
//         </div> */}
//         {/* <div>
//           <p className=" text-xl  ">
//             At BROTEIN BISTRO, we prioritize health and fitness with a diverse
//             menu of nutritious meals and protein-packed smoothies. Enjoy
//             delicious, wellness-focused food whether you're a gym-goer,
//             health-conscious, or simply love good food. Experience the perfect
//             fusion of health and flavor at BROTEIN BISTRO!
//           </p>
//         </div> */}
//         <div className="text-6xl uppercase leading-tight col-span-2">
//           Empowering your
//           <br /> fitness journey
//         </div>
//         {/* <div className="p-4">2</div> */}
//         <div className="p-4"></div>
//         <div className="p-4">
//           <p>
//             At BROTEIN BISTRO, we prioritize health and fitness with a diverse
//             menu of nutritious meals and protein-packed smoothies. Enjoy
//             delicious, wellness-focused food whether you're a gym-goer,
//             health-conscious, or simply love good food. Experience the perfect
//             fusion of health and flavor at BROTEIN BISTRO!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// import { Link } from "react-router-dom";

// export default About;

const Mission = () => {
  return (
    <section className="w-full h-screen snap-start py-16">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-20"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-4 md:p-10">
        <div className="text-4xl md:text-6xl uppercase font-semibold leading-tight col-span-1 md:col-span-2">
          OUr mission
        </div>
        {/* <div className="p-4 hidden md:block"> */}
        <div className=" ">
          <img src="mission_img.png" alt="" />
        </div>
        <div className="p-4 text-base md:text-">
          <p className="m-2">
            At BROTEIN BISTRO, our mission is to revolutionize the way people
            approach health and fitness. We believe that everyone deserves
            access to nutritious, delicious food that supports their wellness
            goals. Our bistro is more than just a place to eat - it's a
            destination where health meets flavor, and where every meal is an
            opportunity to nourish both body and soul. Through our dedication to
            quality, Innovation, and community, we're committed to empowering
            individuals to live their healthiest, happiest lives. Join us on
            this journey to wellness, one delicious bite at a time.
          </p>
          {/* <Link
            className="rounded-full font-semibold py-2 px-4 mr-5 border-black border shadow-md "
            role="button"
            to="/"
          >
            learn more
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Mission;
