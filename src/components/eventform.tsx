'use client'
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import datepickerStyle from "../styles/datePicker.module.css"
import {Box} from "@radix-ui/themes";
import Image from 'next/image';
import SelectZone from './SelectZone';
import Modal from './EditModal';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeZone, setTimeZone] = useState<string>('');
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>('');
  const [videoLink, setVideoLink] = useState<string>('');
  const [formError, setFormError] = useState<object | null>({
    eventName:"",
    description:""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load event data from local storage on component mount
    const eventData = JSON.parse(localStorage.getItem('eventData') || '{}');
    if (eventData) {
      setEventName(eventData.eventName || '');
      setSelectedDate(eventData.selectedDate ? new Date(eventData.selectedDate) : null);
      setTimeZone(eventData.timeZone || '');
      setStartTime(eventData.startTime ? new Date(eventData.startTime) : null);
      setEndTime(eventData.endTime ? new Date(eventData.endTime) : null);
      setDescription(eventData.description || '');
      setVideoLink(eventData.videoLink || '');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { eventName: '', description: '' };

    if (!eventName.trim()) {
      newErrors.eventName = 'Name';
      hasErrors = true;
    }

    if (!description.trim()) {
      newErrors.description = 'Description';
      hasErrors = true;
    }
    setFormError(newErrors);
    if (!hasErrors) {
    const eventData = {
      eventName,
      selectedDate,
      timeZone,
      startTime,
      endTime,
      description,
      videoLink,
    };

    localStorage.setItem('eventData', JSON.stringify(eventData));
    setIsModalOpen(true);
    setEventName("");
    setDescription("");
    setSelectedDate(null);
    setTimeZone("");
    setStartTime(null);
    setEndTime(null);
    setVideoLink('');
  }
  };

  const handleEdit = () => {
    setIsModalOpen(false);
    // Load data from local storage and set to state
    const eventData = JSON.parse(localStorage.getItem('eventData') || '{}');
    setEventName(eventData.eventName || '');
    setSelectedDate(eventData.selectedDate ? new Date(eventData.selectedDate) : null);
    setTimeZone(eventData.timeZone || '');
    setStartTime(eventData.startTime ? new Date(eventData.startTime) : null);
    setEndTime(eventData.endTime ? new Date(eventData.endTime) : null);
    setDescription(eventData.description || '');
    setVideoLink(eventData.videoLink || '');
    setTimeout(() => {
      localStorage.removeItem('eventData')
    }, 1000);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Box className="event-form">
        <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onEdit={handleEdit}
        eventDate={selectedDate ? selectedDate.toDateString() : ''}
      />
      {(formError.eventName || formError.description) && (
        <Box className="form-error">
          <img src="./images/info-icon.svg" alt="" />
          <h1>Missing Event {formError.eventName && formError.eventName} {formError.description && `, ${formError.description}`}</h1>
        </Box>
      )}
      <Box className="create-event">
        <h1>Create an event</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box className="event-name">
          <label htmlFor="eventName">Event name</label>
          <input
            id="eventName"
            placeholder="Your event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className={formError.eventName && "event-error"}
          />
        </Box>
        <Box className="date-time">
          <label htmlFor="dateTime">Date & time</label>
          <Box>
            <Box>
              <Image src="./images/calendar.svg" alt="calendar" width={18} height={18}/>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Select date(s)..."
                dateFormat="MMMM d, yyyy"
                className={datepickerStyle.datePickerInput}
              />
              <Image src="./images/chevron-down.svg" alt="chevron-down"  width={18} height={18}/>
            </Box>
            <Box>
              <Image src="./images/calendar.svg" alt="calendar" width={18} height={18} />
              <SelectZone timeZone={timeZone} setTimeZone={setTimeZone} />
              <Image src="./images/chevron-down.svg" alt="chevron-down" width={18} height={18} />
            </Box>
            <Box>
              <Image src="./images/calendar.svg" alt="calendar" width={18} height={18}/>
              <DatePicker
                selected={startTime}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Start Time"
                dateFormat="h:mm aa"
                placeholderText="Select Start Time"
                className={datepickerStyle.datePickerInput}
              />
              <Image src="./images/chevron-down.svg" alt="chevron-down"  width={18} height={18}/>
            </Box>
            <Box>
              <Image src="./images/calendar.svg" alt="calendar" width={18} height={18}/>
              <DatePicker
                selected={endTime}
                onChange={(time) => setEndTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="End Time"
                dateFormat="h:mm aa"
                placeholderText="Select End Time"
                className={datepickerStyle.datePickerInput}
              />
              <Image src="./images/chevron-down.svg" alt="chevron-down"  width={18} height={18}/>
            </Box>
          </Box>
        </Box>
        <Box className="description">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Add event description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={formError.description && "event-error"}
          ></textarea>
        </Box>
        <Box className="video">
          <label htmlFor="videoLink">Video</label>
          <Box>
            <Image src="./images/link-2.svg" alt="" width={18} height={18}/>
            <input
              id="videoLink"
              type="text"
              placeholder="Add video link..."
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
            />
          </Box>
        </Box>
        <Box className="banner-image">
          <label htmlFor="">Banner image</label>
          <Box>
            <p>
              <a href="">Click to upload </a>or drag and drop SVG, PNG, JPG or GIF
              (recommended size 1024x1024px)
            </p>
          </Box>
        </Box>
        <Box className="form-button">
          <button type="submit" className="submit">Create event</button>
          <button type="button" className="cancel" onClick={()=>{
               setEventName("");
               setDescription("");
               setSelectedDate(null);
               setTimeZone("");
               setStartTime(null);
               setEndTime(null);
               setVideoLink('');
          }}>Cancel</button>
        </Box>
      </form>
    </Box>
  );
};
export default EventForm;
