import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_m4s669v";
    const templateID = "template_qrrxogd";
    const userID = "3-1i6ZWWtzCaf0Kzw";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Tour request sent successfully!");
        closeModal();
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send tour request.");
      }
    );
  };

  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };

  const isWeekday = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDay();
    return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
  };

  const timeOptions = [
    { value: "17:30", label: "5:30 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "18:30", label: "6:30 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "19:30", label: "7:30 PM" },
    { value: "20:00", label: "8:00 PM" },
  ];

  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <h2>Request a Tour</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Preferred Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              onBlur={(e) => {
                if (!isWeekday(e.target.value)) {
                  alert("Please select a weekday.");
                  setFormData({ ...formData, date: "" });
                }
              }}
            />
          </label>
          <label>
            Preferred Time:
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              {timeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message (Optional):
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
