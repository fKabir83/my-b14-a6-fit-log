import AddToPlanButton from "@/components/AddToPlanButton";
import React from "react";

const getData = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();
  return data;
};

const WorkoutDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const allData = await getData();

  const workout = allData.find(
    (item: any) => String(item.id) === id
  );

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Workout not found
        </h1>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 md:px-16 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left Side - Image */}
        <div>
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-[500px] object-cover rounded-[20px]"
          />
        </div>

        {/* Right Side - Details */}
        <div className="text-white bg-[#15171D] rounded-[20px] p-8">

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-3 mb-6">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-4 py-1 text-sm font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold uppercase">
            {workout.name}
          </h1>

          {/* Equipment */}
          <p className="mt-4 text-gray-400 text-lg">
            Equipment: {workout.equipment}
          </p>

          {/* Description */}
          <p className="mt-6 text-gray-300 leading-7">
            {workout.description}
          </p>

          {/* Divider */}
          <div className="my-8 border-t border-gray-700"></div>

          {/* Workout Information */}
          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500">Duration</p>
              <p className="text-xl font-bold">
                {workout.duration} min
              </p>
            </div>

            <div>
              <p className="text-gray-500">Calories</p>
              <p className="text-xl font-bold">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            <div>
              <p className="text-gray-500">Rating</p>
              <p className="text-xl font-bold">
                ☆ {workout.rating}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Difficulty</p>
              <p className="text-xl font-bold">
                {workout.difficulty}
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            {/* <button className="flex-1 rounded-xl bg-[#C2F800] px-6 py-3 font-bold text-black hover:bg-[#a9d900] transition">
              Add to Today's Plan
            </button> */}
            <AddToPlanButton workout={workout} />

            <button className="flex-1 rounded-xl border border-[#C2F800] px-6 py-3 font-bold text-[#C2F800] hover:bg-[#C2F800] hover:text-black transition">
              Save for later
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;