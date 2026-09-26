"use client";

import React, { useState } from "react";
import { addToTodayPlan, getTodayPlan } from "@/lib/planStorage";

const AddToPlanButton = ({ workout }: { workout: any }) => {
  const [added, setAdded] = useState(() => {
    const plan = getTodayPlan();

    return plan.some((item: any) => item.id === workout.id);
  });

  const handleAddToPlan = () => {
    const updatedPlan = addToTodayPlan(workout);

    const isAdded = updatedPlan.some(
      (item: any) => item.id === workout.id
    );

    setAdded(isAdded);
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={added}
      className={`flex-1 rounded-xl px-6 py-3 font-bold transition ${
        added
          ? "bg-gray-600 text-gray-300 cursor-not-allowed"
          : "bg-[#C2F800] text-black hover:bg-[#a9d900]"
      }`}
    >
      {added ? "Added to Today's Plan ✓" : "Add to Today's Plan"}
    </button>
  );
};

export default AddToPlanButton;