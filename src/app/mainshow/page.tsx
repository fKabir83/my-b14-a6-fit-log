import React from "react";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();
  return data;
};

const MainPage = async () => {
  const allData = await getData();

  return (

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
  {allData.map((workout: any) => (
    <Link
      href={`/workout/${workout.id}`}
      key={workout.id}
      className="block overflow-hidden rounded-[20px] bg-[#15171D] text-white shadow-lg border border-gray-300 hover:scale-[1.02] transition-transform duration-300 "
    >
      <div className="h-[260px] w-full">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-3 mb-6">
          {workout.muscleGroups.map((muscle: string) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-4 py-1 text-sm font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="text-[18px] font-bold uppercase tracking-wide">
          {workout.name}
        </h2>

        <p className="mt-2 text-gray-400 text-base">
          {workout.equipment}
        </p>

        <div className="my-6 border-t border-gray-700"></div>

        <div className="flex items-center gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-xl">◷</span>
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg">♨</span>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl">☆</span>
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>



//     <section className="container mx-auto px-30 py-16">

//       {/* Section Heading */}
//       <div className="mb-10">
//         <p className="text-gray-500 mt-2">
//          Twelve lift covering every major muscle group.
//         </p>
//       </div>

//       {/* Workout Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {allData.map((workout: any) => (
//           <div
//             key={workout.id}
//             className="overflow-hidden rounded-[20px] bg-[#15171D] text-white shadow-lg border border-gray-300"
//           >

//             {/* Workout Image */}
//             {/* Workout Image */}
// <div className="h-[260px] w-full">
//   <img
//     src={workout.image}
//     alt={workout.name}
//     className="h-full w-full object-cover"
//   />
// </div>

//             {/* Card Content */}
//             <div className="p-8">

//               {/* Muscle Groups */}
//               <div className="flex flex-wrap gap-3 mb-6">
//                 {workout.muscleGroups.map((muscle: string) => (                  
//                  <span
//                     key={muscle}
//                     className="rounded-full bg-[#C2F800] px-4 py-1 text-sm font-bold uppercase tracking-wide text-black"
//                   >
//                     {muscle}
//                   </span>
                
                 
//                 ))}
//               </div>

//               {/* Workout Name */}
//               <h2 className="text-[18px] font-bold uppercase tracking-wide">
//                 {workout.name}
//               </h2>

//               {/* Equipment */}
//               <p className="mt-2 text-gray-400 text-base">
//                 {workout.equipment}
//               </p>

//               {/* Divider */}
//               <div className="my-6 border-t border-gray-700"></div>

//               {/* Workout Information */}
//               <div className="flex items-center gap-6 text-gray-400">

//                 {/* Duration */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-xl">◷</span>
//                   <span>{workout.duration} min</span>
//                 </div>

//                 {/* Calories */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg">♨</span>
//                   <span>{workout.caloriesBurned} kcal</span>
//                 </div>

//                 {/* Rating */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-xl">☆</span>
//                   <span>{workout.rating}</span>
//                 </div>

//               </div>

//             </div>
//           </div>
//         ))}

//       </div>
//     </section>
  );
};

export default MainPage;




// import React from "react";

// const getData = async () => {
//   const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
//   const data = await response.json();
//   return data;
// };

// const MainPage = async () => {
//   const allData = await getData();

//   return (
//     <section className="container mx-auto my-[100px] px-4">
//       <div className="mb-10">
//         <p className="text-[#C2F800] font-semibold uppercase tracking-widest text-sm">
//           FitLog
//         </p>

//         <h1 className="text-4xl md:text-5xl font-bold mt-2">
//           Explore Workouts
//         </h1>

//         <p className="text-gray-500 mt-3 max-w-xl">
//           Build strength, improve your fitness, and stay consistent with
//           effective workout routines.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {allData.map((workout: any) => (
//           <div
//             key={workout.id}
//             className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//           >
//             {/* Top */}
//             <div className="flex items-center justify-between mb-5">
//               <span className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1.5 rounded-full">
//                 {workout.difficulty}
//               </span>

//               <div className="flex items-center gap-1 text-sm font-semibold">
//                 <span className="text-yellow-500">★</span>
//                 {workout.rating}
//               </div>
//             </div>

//             {/* Title */}
//             <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#6d8f00] transition-colors">
//               {workout.name}
//             </h2>

//             {/* Description */}
//             <p className="text-gray-500 text-sm leading-6 mt-3">
//               {workout.description}
//             </p>

//             {/* Muscle Groups */}
//             <div className="flex flex-wrap gap-2 mt-5">
//               {workout.muscleGroups.map((muscle: string) => (
//                 <span
//                   key={muscle}
//                   className="text-xs font-medium border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full"
//                 >
//                   {muscle}
//                 </span>
//               ))}
//             </div>

//             {/* Divider */}
//             <div className="border-t border-gray-100 my-5"></div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-3 text-center">
//               <div>
//                 <p className="text-lg font-bold">{workout.duration}</p>
//                 <p className="text-xs text-gray-400">Minutes</p>
//               </div>

//               <div>
//                 <p className="text-lg font-bold">{workout.sets}</p>
//                 <p className="text-xs text-gray-400">Sets</p>
//               </div>

//               <div>
//                 <p className="text-lg font-bold">{workout.reps}</p>
//                 <p className="text-xs text-gray-400">Reps</p>
//               </div>
//             </div>

//             {/* Bottom */}
//             <div className="flex items-center justify-between mt-6">
//               <div>
//                 <p className="text-xs text-gray-400">Calories</p>
//                 <p className="font-bold">{workout.caloriesBurned} kcal</p>
//               </div>

//               <button className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#C2F800] hover:text-black transition-all duration-300">
//                 View Workout
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MainPage;









// // import React from 'react';

// // const getData=async()=>{
// //     const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
// //     const data = await response.json();
// //     return data; 
// // }

// // const MainPage = async() => {
// //      const allData = await getData();
    
    
// //     return (
// //         <section className='container mx-auto my-[100px]'>
// //             All Data 
// //             {allData.map((book, id)=>{
// //                 return <div key={id}>{book.bookName}</div>
// //             })}
// //         </section>
// //     );
// // };

// // export default MainPage;