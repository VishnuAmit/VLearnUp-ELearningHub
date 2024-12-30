import { render } from "react-dom";
import { useForm } from "react-cool-form";
import "../styles.scss";
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { css } from "@emotion/css";
import "./StreamfinderStyle.css";
import CourseInputModal from "./CourseInputModal"

const institutes = [
  "IIT Bombay",
  "IIT Delhi",
  "IIT Kanpur",
  "IIT Kharagpur",
  "IIT Madras",
  "IIT Roorkee",
  "IIT Guwahati",
  "IIT Hyderabad",
  "IIT Gandhinagar",
  "IIT Ropar",
  "NIT Trichy",
  "NIT Surathkal",
  "NIT Warangal",
  "BITS Pilani",
  "Delhi University",
  "Jawaharlal Nehru University",
  "Indian Institute of Science",
  "Indian Statistical Institute",
  "National Institute of Design",
  "Indian School of Business",
  "University of Hyderabad",
  "Panjab University",
  "Indian Institute of Technology (IIT) Bhubaneswar",
  "Indian Institute of Technology (IIT) Jodhpur",
  "Indian Institute of Technology (IIT) Mandi",
  "Indian Institute of Technology (IIT) Palakkad",
  "Indian Institute of Technology (IIT) Dharwad",
  "Indian Institute of Technology (IIT) Bhilai",
  "Indian Institute of Technology (IIT) Jammu",
  "Indian Institute of Technology (IIT) Patna",
  "Indian Institute of Technology (IIT) Indore",
  "Indian Institute of Technology (IIT) Varanasi",
  "Indian Institute of Technology (IIT) Ropar",
  "Indian Institute of Technology (IIT) Gandhinagar",
  "Indian Institute of Technology (IIT) Hyderabad",
  "Indian Institute of Technology (IIT) Roorkee",
  "Indian Institute of Technology (IIT) Kanpur",
  "Indian Institute of Technology (IIT) Kharagpur",
  "Indian Institute of Technology (IIT) Madras",
  "Indian Institute of Technology (IIT) Bombay",
  "Indian Institute of Technology (IIT) Delhi",
  "National Institute of Technology (NIT) Calicut",
  "National Institute of Technology (NIT) Durgapur",
  "National Institute of Technology (NIT) Hamirpur",
  "National Institute of Technology (NIT) Jalandhar",
  "National Institute of Technology (NIT) Kurukshetra",
  "National Institute of Technology (NIT) Rourkela",
  "National Institute of Technology (NIT) Silchar",
  "National Institute of Technology (NIT) Srinagar",
  "Delhi Technological University (DTU)",
  "Jawaharlal Nehru Technological University (JNTU) Hyderabad",
  "University of Pune",
  "Amrita Vishwa Vidyapeetham",
  "Thapar Institute of Engineering and Technology",
  "Shiv Nadar University",
  "Indian Institute of Information Technology (IIIT) Allahabad",
  "Indian Institute of Information Technology (IIIT) Bangalore",
  "Indian Institute of Information Technology (IIIT) Design and Manufacturing Kancheepuram",
  "Indian Institute of Information Technology (IIIT) Gwalior",
  "Indian Institute of Information Technology (IIIT) Hyderabad",
  "Indian Institute of Information Technology (IIIT) Kota",
  "Indian Institute of Information Technology (IIIT) Kurnool",
  "Indian Institute of Information Technology (IIIT) Mangalore",
  "Indian Institute of Information Technology (IIIT) Nagpur",
  "Indian Institute of Information Technology (IIIT) Pune",
  "Indian Institute of Information Technology (IIIT) Sonepat",
  "Indian Institute of Information Technology (IIIT) Una",
  "Indian Institute of Information Technology (IIIT) Vadodara",
  "Indian Institute of Information Technology (IIIT) Vellore",
  "KLN",
  "Other"
];


const Field = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} required />
  </div>
);

const Select = ({ label, id, children, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select id={id} {...rest}>
      {children}
    </select>
  </div>
);

const Textarea = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea id={id} {...rest} />
  </div>
);

function CardComponent({ title, text, buttonText, imgSrc, heading, onClick , isSelected}) {
  return (
    <Card  className={`card ${isSelected ? 'selected' : ''}`}  onClick={onClick}>
      <Card.Img className="card-img" variant="top" src={imgSrc} />
      <Card.Body className="card-body">
        {/* <Card.Title>{title}</Card.Title> */}
        <Card.Title className="card-heading">{heading}</Card.Title>
      </Card.Body>
    </Card>
  );
}

function Streamfinder() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();

  const { form } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      institute: "",
    },

    onSubmit: (values) => {
      setFormData(values);
      setIsModalOpen(true);
    },
  });

  const handleCourseSubmit = (course) => {
    if (!course) {
      console.error("No course selected!");
      return;
    }
    setSelectedCourse(course);
    navigate("/dashboard", {
      state: {
        ...formData,
        course,
      },
    });
  };

  return (
    <div className="container">
      <div className="icon">
        <img src="/image-24@2x.png" alt="Icon" />
      </div>
      <form ref={form} className="form">
        <Field label="First Name" id="first-name" name="firstName" required />
        <Field label="Last Name" id="last-name" name="lastName" required />
        <Field label="Date of Birth" id="dob" name="dob" type="date" required />
        <Select label="Institute Name" id="institute" name="institute" required>
          <option value="">Select your institute...</option>
          {institutes.map((institute, index) => (
            <option key={index} value={institute}>
              {institute}
            </option>
          ))}
        </Select>
        <input type="submit" />
        <CourseInputModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleCourseSubmit} />

      </form>
      <div className="stream-heading">
        <h2>Select Your Stream</h2>
      </div>

      <div className="card-container">
        <CardComponent
          imgSrc="/image-25@2x.png"
          heading="NEET UG"
          isSelected={selectedCourse === 'NEET-UG'}
          onClick={() => setSelectedCourse('NEET-UG')}
        />
        <CardComponent
          imgSrc="/image-26@2x.png"
          heading="IIT-JEE"
          isSelected={selectedCourse === 'IIT-JEE'}
          onClick={() => setSelectedCourse('IIT-JEE')}
        />
        <CardComponent
          imgSrc="/image-27@2x.png"
          heading="BANKING"
          isSelected={selectedCourse === 'BANKING'}
          onClick={() => setSelectedCourse('BANKING')}
        />
        <CardComponent
          imgSrc="/image-28@2x.png"
          heading="UPSC"
          isSelected={selectedCourse === 'UPSC'}
          onClick={() => setSelectedCourse('UPSC')}
        />
      </div>

    </div>
  );
}


export default Streamfinder;