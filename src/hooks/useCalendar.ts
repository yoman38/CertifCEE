import { useEffect, useCallback } from 'react';
import { getCalApi } from "@calcom/embed-react";

export const useCalendar = (onScheduled: () => void) => {
  const initializeCalendar = useCallback(async () => {
    const cal = await getCalApi();
    // Instead of using .on(), we'll use the config callbacks
    return cal;
  }, []);

  useEffect(() => {
    initializeCalendar();
  }, [initializeCalendar]);
};