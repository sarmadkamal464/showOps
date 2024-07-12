"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import datepickerStyle from "../styles/datePicker.module.css";
import { Box, Button } from "@radix-ui/themes";
import Image from "next/image";
import SelectZone from "./SelectZone";
import Modal from "./Modal/Modal";
import { useGlobalState } from "../context/GlobalState";


const EventForm = () => {
  const [eventName, setEventName] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeZone, setTimeZone] = useState<string>("");
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>("");
  const [videoLink, setVideoLink] = useState<string>("");
  const [formError, setFormError] = useState<object | null>({
    eventName: "",
    description: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [state] = useGlobalState();
  const { mode } = state;
  useEffect(() => {
    // Load event data from local storage on component mount
    const eventData = JSON.parse(localStorage.getItem("eventData") || "{}");
    if (eventData) {
      setEventName(eventData.eventName || "");
      setSelectedDate(
        eventData.selectedDate ? new Date(eventData.selectedDate) : null
      );
      setTimeZone(eventData.timeZone || "");
      setStartTime(eventData.startTime ? new Date(eventData.startTime) : null);
      setEndTime(eventData.endTime ? new Date(eventData.endTime) : null);
      setDescription(eventData.description || "");
      setVideoLink(eventData.videoLink || "");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { eventName: "", description: "" };

    if (!eventName.trim()) {
      newErrors.eventName = "Name";
      hasErrors = true;
    }

    if (!description.trim()) {
      newErrors.description = "Description";
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

      localStorage.setItem("eventData", JSON.stringify(eventData));
      setIsModalOpen(true);
      setEventName("");
      setDescription("");
      setSelectedDate(null);
      setTimeZone("");
      setStartTime(null);
      setEndTime(null);
      setVideoLink("");
      setBannerImage(null);
      setImagePreview(null);
    }
  };

  const handleEdit = () => {
    setIsModalOpen(false);
    // Load data from local storage and set to state
    const eventData = JSON.parse(localStorage.getItem("eventData") || "{}");
    setEventName(eventData.eventName || "");
    setSelectedDate(
      eventData.selectedDate ? new Date(eventData.selectedDate) : null
    );
    setTimeZone(eventData.timeZone || "");
    setStartTime(eventData.startTime ? new Date(eventData.startTime) : null);
    setEndTime(eventData.endTime ? new Date(eventData.endTime) : null);
    setDescription(eventData.description || "");
    setVideoLink(eventData.videoLink || "");
    setTimeout(() => {
      localStorage.removeItem("eventData");
    }, 1000);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const isFutureDate = (date: Date): boolean => {
    const today = new Date();
    return date.getTime() > today.getTime();
  };

  // Function to handle date change and enforce restriction
  const handleDateChange = (date: Date | null) => {
    if (!date || !isFutureDate(date)) {
      setSelectedDate(date);
    }
  };

  const handleVideoLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Check if the entered value starts with "https://"
    if (value.startsWith("https://")) {
      setVideoLink(value);
    } else if (value === "" || value.startsWith("http://")) {
      // Allow http:// links for compatibility, else ignore invalid input
      setVideoLink(value);
    }
  };
  // const handleDescriptionChange = (
  //   e: React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   const { value } = e.target;

  //   // Update description state
  //   setDescription(value);

  //   // Validate description length
  //   if (value.length < 15) {
  //     setFormError({ description: 'Description' });
  //   } else {
  //     setFormError({ description: '' });
  //   }
  // };
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/svg+xml",
        "image/gif",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type. Please upload an image.");
        return;
      }

      setBannerImage(file);

      // Preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setBannerImage(null);
    setImagePreview(null);
  };
  return (
    <Box className="event-form">
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onEdit={handleEdit}
        eventDate={selectedDate ? selectedDate.toDateString() : ""}
      />
      {(formError.eventName || formError.description) && (
        <Box className="form-error">
          <img src="./images/info-icon.svg" alt="" />
          <h1>
            Missing Event {formError.eventName && formError.eventName}{" "}
            {formError.description && `, ${formError.description}`}
          </h1>
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
              <Image
                src="./images/calendar.svg"
                alt="calendar"
                width={18}
                height={18}
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(0%)",
                }}
              />
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Select date(s)..."
                dateFormat="MMMM d, yyyy"
                maxDate={new Date()} // Restrict to today or earlier
                className={datepickerStyle.datePickerInput}
              />
              <Image
                src="./images/chevron-down.svg"
                alt="chevron-down"
                width={18}
                height={18}
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(0%)",
                }}
              />
            </Box>
            <Box>
              <Image
                src="./images/globe.svg"
                alt="globe"
                width={18}
                height={18}
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(0%)",
                }}
              />
              <SelectZone timeZone={timeZone} setTimeZone={setTimeZone} />
              <Image
                src="./images/chevron-down.svg"
                alt="chevron-down"
                width={18}
                height={18}
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(0%)",
                }}
              />
            </Box>
            <Box>
              <Image
                src="./images/clock.svg"
                alt="calendar"
                width={18}
                height={18}
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(0%)",
                }}
              />
              <DatePicker
                selected={startTime}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Start Time"
                dateFormat="HH:mm"
                placeholderText="Select Start Time"
                className={datepickerStyle.datePickerInput}
              />
              <Image
                src="./images/chevron-down.svg"
                alt="chevron-down"
                width={18}
                height={18}
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(0%)",
                }}
              />
            </Box>
            <Box>
              <Image
                src="./images/clock.svg"
                alt="calendar"
                width={18}
                height={18}
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(0%)",
                }}
              />
              <DatePicker
                selected={endTime}
                onChange={(time) => setEndTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="End Time"
                dateFormat="HH:mm"
                placeholderText="Select End Time"
                className={datepickerStyle.datePickerInput}
              />
              <Image
                src="./images/chevron-down.svg"
                alt="chevron-down"
                width={18}
                height={18}
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(0%)",
                }}
              />
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
            minLength={15}
          ></textarea>
        </Box>
        <Box className="video">
          <label htmlFor="videoLink">Video</label>
          <Box>
            <Image
              src="./images/link-2.svg"
              alt=""
              width={18}
              height={18}
              style={{
                filter: mode === "dark" ? "invert(100%)" : "invert(0%)",
              }}
            />
            <input
              id="videoLink"
              type="text"
              placeholder="Add video link..."
              value={videoLink}
              onChange={handleVideoLinkChange}
            />
          </Box>
        </Box>
        <Box className="banner-image">
          <label htmlFor="bannerImage">Banner image</label>
          <Box>
            <p>
              <a
                href="#!"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Click to upload
              </a>{" "}
              or drag and drop SVG, PNG, JPG or GIF (recommended size
              1024x1024px)
            </p>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </Box>
        </Box>
        {imagePreview && (
          <Box className="PreviewImage">
            <Image src={imagePreview} alt="" width={120} height={120} />
            <Box className="ImageContent">
              <Button onClick={handleRemoveImage}>
                <Image src="./images/trash.svg" width={16} height={16} alt="" />
              </Button>
              <h1>{bannerImage?.name}</h1>
              <h3>{(bannerImage?.size / (1024 * 1024)).toFixed(2)} MB</h3>
            </Box>
          </Box>
        )}
        <Box className="form-button">
          <button type="submit" className="submit">
            Create event
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => {
              setEventName("");
              setDescription("");
              setSelectedDate(null);
              setTimeZone("");
              setStartTime(null);
              setEndTime(null);
              setVideoLink("");
              setBannerImage(null);
              setImagePreview(null);
            }}
          >
            Cancel
          </button>
        </Box>
      </form>
    </Box>
  );
};
export default EventForm;
