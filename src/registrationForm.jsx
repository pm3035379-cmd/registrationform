import { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";


function RegistrationForm() {

    const location=useLocation();
    const nav=useNavigate();

    useEffect(()=>{
        if(!location.state?.allowed){
            nav("/")
        }
    },[location,nav]);

  const [form, setForm] = useState({
    studentName: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    maritalStatus: "",
    religion: "",
    caste: "",
    aadhaar: "",
    mobile: "",
    whatsapp: "",
    email: "",
    address: "",

    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    guardianName: "",
    guardianContact: "",

    qualification: "",
    schoolCollege: "",
    passingYear: "",
    marks: "",

    academicYear: "2026",
    course: [],
  });

  const [files, setFiles] = useState({
    passportPhoto: null,
    verificationProof1: null,
    verificationProof2: null,
    studentDeclaration: null,
    parentDeclaration: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({
        ...form,
        course: [...form.course, value],
      });
    } else {
      setForm({
        ...form,
        course: form.course.filter(
          (item) => item !== value
        ),
      });
    }
  };

  const handleFile = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0],
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (key === "course") {
        formData.append(
          key,
          JSON.stringify(form[key])
        );
      } else {
        formData.append(key, form[key]);
      }
    });

    Object.keys(files).forEach((key) => {
      formData.append(key, files[key]);
    });

    try {
      const res = await fetch(
        "https://backendcode-2-ffva.onrender.com/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        await emailjs.send(
          "service_a6l3nhs",
          "template_v0jlzv4",
          {
            studentName: form.studentName,
            dob: form.dob,
            gender: form.gender,
            bloodGroup: form.bloodGroup,
            maritalStatus:
              form.maritalStatus,
            religion: form.religion,
            caste: form.caste,
            aadhaar: form.aadhaar,
            mobile: form.mobile,
            whatsapp: form.whatsapp,
            email: form.email,
            address: form.address,

            fatherName:
              form.fatherName,
            fatherOccupation:
              form.fatherOccupation,
            motherName:
              form.motherName,
            motherOccupation:
              form.motherOccupation,
            guardianName:
              form.guardianName,
            guardianContact:
              form.guardianContact,

            qualification:
              form.qualification,
            schoolCollege:
              form.schoolCollege,
            passingYear:
              form.passingYear,
            marks: form.marks,

            course:
              form.course.join(", "),
            academicYear:
              form.academicYear,

            passportPhoto:
              data.data.passportPhoto,
            verificationProof1:
              data.data
                .verificationProof1,
            verificationProof2:
              data.data
                .verificationProof2,
            studentDeclaration:
              data.data
                .studentDeclaration,
            parentDeclaration:
              data.data
                .parentDeclaration,
          },
          "WCdoavNKcCJ8xMDxz"
        );

        alert(
          "Registration Submitted"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };


    
  return (
   


    <div>
      <h1>Registration Form</h1>

      <form onSubmit={submitForm}>
        <h2>
          Personal Details
        </h2>

        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          onChange={handleChange}
        />

        <input
          type="date"
          name="dob"
          onChange={handleChange}
        />

        <input
          type="text"
          name="gender"
          placeholder="Gender"
          onChange={handleChange}
        />

        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group"
          onChange={handleChange}
        />

        <input
          type="text"
          name="maritalStatus"
          placeholder="Marital Status"
          onChange={handleChange}
        />

        <input
          type="text"
          name="religion"
          placeholder="Religion"
          onChange={handleChange}
        />

        <input
          type="text"
          name="caste"
          placeholder="Caste"
          onChange={handleChange}
        />

        <input
          type="text"
          name="aadhaar"
          placeholder="Aadhaar Number"
          onChange={handleChange}
        />

        <input
          type="file"
          name="passportPhoto"
          onChange={handleFile}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
        />

        <input
          type="text"
          name="whatsapp"
          placeholder="WhatsApp Number"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <h2>
          Parent / Guardian Details
        </h2>

        <input
          type="text"
          name="fatherName"
          placeholder="Father Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="fatherOccupation"
          placeholder="Father Occupation"
          onChange={handleChange}
        />

        <input
          type="text"
          name="motherName"
          placeholder="Mother Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="motherOccupation"
          placeholder="Mother Occupation"
          onChange={handleChange}
        />

        <input
          type="text"
          name="guardianName"
          placeholder="Guardian Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="guardianContact"
          placeholder="Guardian Contact"
          onChange={handleChange}
        />

        <h2>
          Educational Details
        </h2>

        <input
          type="text"
          name="qualification"
          placeholder="Highest Qualification"
          onChange={handleChange}
        />

        <input
          type="text"
          name="schoolCollege"
          placeholder="School/College Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="passingYear"
          placeholder="Year of Passing"
          onChange={handleChange}
        />

        <input
          type="text"
          name="marks"
          placeholder="Marks / Percentage"
          onChange={handleChange}
        />

        <h2>Course</h2>

        <label>
          <input
            type="checkbox"
            value="ADFNA"
            onChange={
              handleCheckbox
            }
          />
          ADFNA
        </label>

        <label>
          <input
            type="checkbox"
            value="ADMLT"
            onChange={
              handleCheckbox
            }
          />
          ADMLT
        </label>

        <h2>
          Documents Upload
        </h2>

        <p>
          Verification Proof 1
        </p>
        <input
          type="file"
          name="verificationProof1"
          onChange={handleFile}
        />

        <p>
          Verification Proof 2
        </p>
        <input
          type="file"
          name="verificationProof2"
          onChange={handleFile}
        />

        <p>
          Student Declaration Pic
        </p>
        <input
          type="file"
          name="studentDeclaration"
          onChange={handleFile}
        />

        <p>
          Parent Declaration Pic
        </p>
        <input
          type="file"
          name="parentDeclaration"
          onChange={handleFile}
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}


  

export default RegistrationForm;
