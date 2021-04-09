import validate from "./RegvalidateInfo";
import useReg from "./useReg";

import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RegForm.css";

const RegForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useReg(
    submitForm,
    validate
  );

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="Form_Reg">
      <form onSubmit={handleSubmit} className="RegFrom">
        <br />

        <h1 className="Heading">REGISTRATION</h1>
        <br />

        <div className="Form_text">
          <label className="Form-label">Trainees Name</label>
          <input
            name="name"
            value={values.name}
            className="Form-input"
            type="text"
            placeholder="Enter your username"
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="Form_text">
          <label className="Form-label">Date of birth</label>
          <br />
          <DatePicker
            name="date"
            className="Form-input-date"
            placeholder="Place your date of birth"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              let Stringdate = date.toUTCString();
              values.date = Stringdate;
            }}
          />
          {errors.birth && <p>{errors.birth}</p>}
        </div>

        <div className="Form_text">
          <label className="Form-label">Gender</label>
          <select
            className="Form-input-date"
            name="gender"
            id="gender"
            placeholder="Select your gender"
            value={values.gender}
            onChange={handleChange}
          >
            <option value="0"> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          {errors.gender && <p>{errors.gender}</p>}
        </div>
        <div className="Form_text">
          <label className="Form-label">Blood Group</label>
          <select
            className="Form-input-date"
            name="bloodgroup"
            id="cars"
            value={values.bloodgroup}
            onChange={handleChange}
            placeholder="Select your blood group"
          >
            <option value="0"> </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
            <option value="AB+">AB+</option>
          </select>
          {errors.bloodgroup && <p>{errors.bloodgroup}</p>}
        </div>
        <div className="Form_text">
          <label className="Form-label">Address</label>
          <input
            className="Form-input"
            type="text"
            name="address"
            placeholder="Enter your Address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <div className="Form_text">
          <label className="Form-label">Email</label>
          <input
            className="Form-input"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="Form_text">
          <label className="Form-label">City</label>
          <input
            className="Form-input"
            type="text"
            name="city"
            placeholder="Enter your city"
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>

        <div className="Form_text">
          <label className="Form-label">Tel/Mobile No</label>
          <input
            className="Form-input"
            type="text"
            name="telephone"
            placeholder="Enter your telephone number"
            value={values.telephone}
            onChange={handleChange}
          />
          {errors.telephone && <p>{errors.telephone}</p>}
        </div>

        <div className="Form_text">
          <label className="Form-label">Family Doctor's Name:</label>
          <input
            className="Form-input"
            type="text"
            name="doctor"
            placeholder="Enter the name of family doctor"
            value={values.doctor}
            onChange={handleChange}
          />
          {errors.doctor && <p>{errors.doctor}</p>}
        </div>

        <div className="Form_text">
          <label className="Form-label">Clinic/Hospital Used (optional)</label>
          <input
            className="Form-input"
            type="text"
            name="clinic"
            placeholder="Enter Hospital Name "
            value={values.clinic}
            onChange={handleChange}
          />
          {errors.clinic && <p>{errors.clinic}</p>}
        </div>
        <button className="Form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegForm;
