export const PLAN_KEY = "todayPlan";

export const getTodayPlan = () => {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(PLAN_KEY);

  return data ? JSON.parse(data) : [];
};

export const addToTodayPlan = (workout: any) => {
  const currentPlan = getTodayPlan();

  // Don't add the same workout twice
  const alreadyAdded = currentPlan.some(
    (item: any) => item.id === workout.id
  );

  if (alreadyAdded) {
    return currentPlan;
  }

  // Maximum 5 exercises
  if (currentPlan.length >= 5) {
    return currentPlan;
  }

  const updatedPlan = [...currentPlan, workout];

  localStorage.setItem(PLAN_KEY, JSON.stringify(updatedPlan));

  // Tell other components that the plan changed
  window.dispatchEvent(new Event("planUpdated"));

  return updatedPlan;
};