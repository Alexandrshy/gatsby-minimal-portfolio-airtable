export const preparationReadingTime = (min: number): string => {
  const COFFEE_TIME = 5
  const LUNCH_TIME = 15
  const COFFEE_LIMIT = 5
  const cups = Math.round(min / COFFEE_TIME)

  return `${
    cups > COFFEE_LIMIT
      ? new Array(Math.round(min / LUNCH_TIME)).fill("🍔").join("")
      : new Array(cups || 1).fill("☕️").join("")
  } ${min} min read`
}
