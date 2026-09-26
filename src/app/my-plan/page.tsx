"use client";

import React, { useState } from "react";
import Link from "next/link";

const MyPlan = () => {
  const [sortBy, setSortBy] = useState("duration");

  // Initially there are no exercises
  const exercises: any[] = [];

  const totalExercises = exercises.length;

  const totalMinutes = exercises.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = exercises.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0F1115] text-white">
      
      {/* Main Container */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 py-16">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold uppercase">
            My Plan
          </h1>

          <p className="mt-3 text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#181B22] rounded-2xl border border-gray-700 overflow-hidden">

          {/* Exercises */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700">
            <p className="text-sm text-gray-400">
              Exercises
            </p>

            <h2 className="mt-2 text-4xl font-bold text-[#C2F800]">
              {totalExercises}
            </h2>
          </div>

          {/* Minutes */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700">
            <p className="text-sm text-gray-400">
              Minutes
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {totalMinutes}
            </h2>
          </div>

          {/* Calories */}
          <div className="p-8">
            <p className="text-sm text-gray-400">
              Calories
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {totalCalories}
            </h2>
          </div>

        </div>

        {/* Tabs + Sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-10 pb-5 border-b border-gray-700">

          {/* Tabs */}
          <div className="flex bg-[#181B22] rounded-xl overflow-hidden">

            <button className="px-6 py-3 bg-[#242832] font-semibold">
              Today's Plan
            </button>

            <button className="px-6 py-3 text-gray-400 hover:text-white">
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#181B22] border border-gray-700 rounded-xl px-4 py-3 outline-none"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>

        </div>

        {/* Empty State */}
        {exercises.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center py-32">

            <h2 className="text-2xl font-bold uppercase">
              Nothing Here Yet
            </h2>

            <p className="mt-3 text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/mainshow"
              className="mt-7 rounded-xl bg-[#C2F800] px-8 py-3 font-bold text-black hover:bg-[#a9d900] transition"
            >
              Go To Workouts
            </Link>

          </div>
        )}

      </section>
    </main>
  );
};

export default MyPlan;