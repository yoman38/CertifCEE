import React from 'react';
import Cal from "@calcom/embed-react";
import { calendarConfig } from '../../config/calendar';

interface CalendarEmbedProps {
  onScheduled: () => void;
}

const CalendarEmbed: React.FC<CalendarEmbedProps> = ({ onScheduled }) => {
  return (
    <Cal
      calLink={calendarConfig.username}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      config={{
        ...calendarConfig.settings,
        onEventScheduled: () => {
          console.log('Consultation scheduled');
          onScheduled();
        }
      }}
    />
  );
}

export default CalendarEmbed;