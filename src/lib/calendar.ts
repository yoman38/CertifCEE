import { getCalApi } from "@calcom/embed-react";

export const initializeCalendar = async (username: string) => {
  try {
    const cal = await getCalApi();
    await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay to ensure Cal API is ready
    return cal;
  } catch (error) {
    console.error('Failed to initialize calendar:', error);
    return null;
  }
};