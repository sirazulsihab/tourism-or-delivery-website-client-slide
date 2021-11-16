import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useAuth from "../../hooks/useAuth";
import "./Form.css";

const Form = () => {
  // const {register, handleSubmit, formState:{errors}} = useForm();
  // const {user}
  const { contexts } = useAuth();
  const handleNameChange = (e) => {};
  const handleEmailChange = (e) => {};
  return (
    <div>
      <Header></Header>
      <div className="container contai">
        <h1 style={{ textAlign: "center" }}>Fill up the form</h1>
        <form className="opinion" action="action_page.php">
          <label htmlFor="fname">Name</label>
          <input
            onChange={handleNameChange}
            type="text"
            id="fname"
            name="firstname"
            value={contexts.user.displayName}
          />

          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmailChange}
            type="text"
            id="lname"
            name="email"
            value={contexts.user.email}
          />

          <label htmlFor="address">Address</label>
          <input type="text" id="lname" name="address" placeholder="address" />

          <label htmlFor="phone-number">Phone Number</label>
          <input type="text" id="lname" name="phone" placeholder="" />

          <Link to="/thanks">
            <input type="submit" value="Submit" />
          </Link>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Form;
