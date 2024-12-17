import React, { useEffect } from 'react';
import { initializeCalendar } from '../lib/calendar';
import { calendarConfig } from '../config/calendar';
import CalendarEmbed from './calendar/CalendarEmbed';
import CloseButton from './calendar/CloseButton';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      initializeCalendar(calendarConfig.username);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          onClick={onClose}
        />
        
        <div className="relative bg-white rounded-lg w-full max-w-4xl">
          <div className="absolute right-0 top-0 p-4">
            <CloseButton onClick={onClose} />
          </div>
          
          <div className="h-[600px]">
            <CalendarEmbed onScheduled={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;