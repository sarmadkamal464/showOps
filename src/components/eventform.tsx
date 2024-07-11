'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
// import 'react-select/dist/react-select.css';
import datepickerStyle from "../styles/datePicker.module.css"
// import * as Select from '@radix-ui/react-select';
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
const timeZones = [
  { value: 'UTC', label: 'UTC' },
  { value: 'GMT', label: 'GMT' },
  { value: 'PDT', label: 'PDT' },
];
const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeZone, setTimeZone] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [description, setDescription] = useState('');
  const [videoLink, setVideoLink] = useState('');
  return (
    <div className="evenr-form">
      <div className="form-error">
        <img src="./images/info-icon.svg" alt="" />
        <h1>Missing event name</h1>
      </div>
      <div className="create-event">
        <h1>Create an event</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className="event-name">
        <label htmlFor="">Event name</label>
        <input placeholder="Your event name" />
      </div>
        <div className="date-time">
        <label htmlFor="dateTime">Date & time</label>
        <div>
          <div>
            <img src="./images/calendar.svg" alt="calendar" />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select date(s)..."
              dateFormat="MMMM d, yyyy"
              className={datepickerStyle.datePickerInput}
            />
            <img src="./images/chevron-down.svg" alt="chevron-down" />
          </div>
          <div>
            <img src="./images/calendar.svg" alt="calendar" />
            <select name="zone" id="zone">
              <option value="UTC">UTC</option>
              <option value="GMT">GMT</option>
            </select>
            <img src="./images/chevron-down.svg" alt="chevron-down" />
          </div>
          <div>
            <img src="./images/calendar.svg" alt="calendar" />
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
            <img src="./images/chevron-down.svg" alt="chevron-down" />
          </div>
          <div>
            <img src="./images/calendar.svg" alt="calendar" />
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
            <img src="./images/chevron-down.svg" alt="chevron-down" />
          </div>
        </div>
      </div>
      <div className="description">
        <label htmlFor="">Description</label>
        <textarea
          name=""
          id=""
          placeholder="Add event description..."
        ></textarea>
      </div>
      <div className="video">
        <label htmlFor="">Video</label>
        <div>
          <img src="./images/link-2.svg" alt="" />
          <input type="text" placeholder="Add video link..." />
        </div>
      </div>
      <div className="banner-image">
        <label htmlFor="">Banner image</label>
        <div>
          <p>
            <a href="">Click to upload </a>or drag and drop SVG, PNG, JPG or GIF
            (recommended size 1024x1024px)
          </p>
        </div>
      </div>
      <div className="form-button">
        <button className="submit">Create event</button>
        <button className="cancel">Cancel</button>
      </div>
    </div>
  );
};
export default EventForm;
