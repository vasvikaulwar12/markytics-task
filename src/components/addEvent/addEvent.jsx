import React, { useState } from 'react';
import './addEvent.css';

const AddEvent = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    status: 'upcoming', // default status
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddEvent(formData);
      setFormData({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        status: 'upcoming',
      });
      setErrors({});
    }
  };

  return (
    <>
    <div className="about" style={{backgroundImage:"URL('./images/about.png')"}}>
            <div className="about-content">
            <h1><b><i>AddEvent</i></b></h1>
            </div>
        </div>
        <div className="addevent">
            <form onSubmit={handleSubmit}>
                <div className="addevent-form-inputfild">
                    <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
                        {errors.title && <span>{errors.title}</span>}
                </div>
                <div className='addevent-form-inputfild'>
                    <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
                    {errors.description && <span>{errors.description}</span>}
                </div>
                <div className='addevent-form-inputfild'>
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
                {errors.date && <span>{errors.date}</span>}
                </div>
                <div className='addevent-form-inputfild'>
                <input type="time" name="time" value={formData.time} onChange={handleChange} />
                {errors.time && <span>{errors.time}</span>}
                </div>
                <div className='addevent-form-inputfild'>
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
                {errors.location && <span>{errors.location}</span>}
                </div>
                <div className='addevent-form-inputfild'>
                <select name="status" value={formData.status} onChange={handleChange}>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
            </select>
                </div>
            
            
            
            
            

            <button type="submit" className='submit'>Add Event</button>
            </form>
        </div>
    </>
    
    
  );
};

export default AddEvent;
