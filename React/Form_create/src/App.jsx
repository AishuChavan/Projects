
import { useState } from "react";
function App() {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
  })
  function changeHandler(event){
    const {name,checked,type}=event.target;
    setFormData((prev)=>(
      {...prev,[name]:type === "checkbox" ? checked:event.target.value}
    ));
  }
  function submitHandler(event)
  {
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center m-1 p-0">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label><br></br>
        <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Aishwarya"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="lastName">Last Name:</label><br></br>
        <input 
          type="text"
          name="lastName"
          id="lastName"

          placeholder="Chavan"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="email">Email Address:</label><br></br>
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="aish@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        
        <label htmlFor="country">Country</label>
        <br></br>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United States</option>
          <option>Dubai</option>
          <option>Canada</option>
        </select>
        <br/>
        <label htmlFor="streetAddress">street Address:</label><br></br>
        <input 
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="korochi (chavanwadi)"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="city">City:</label><br></br>
        <input 
          type="text"
          name="city"
          id="city"
          placeholder="ichalkaranji"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />
        <br/>

        <label htmlFor="state">State/Provice:</label><br></br>
        <input 
          type="text"
          name="state"
          id="state"
          placeholder="Maharashtra"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <label htmlFor="postalCode">postal Code:</label><br></br>
        <input 
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="416109"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
          <input 
            id="comments"
            type="checkbox"
            name="comments"
            checked={formData.comments}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someone posts a comment on a posting.</p>
          </div>
          </div>
          <br/>
          <div className="flex">
          <input 
            id="candidates"
            type="checkbox"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when candidates applies for a job.</p>
          </div>
          </div>
          <br/>
          <div className="flex">
          <input 
            id="offers"
            type="checkbox"
            name="offers"
            checked={formData.offers}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when candidates accenpts or rejects offers</p>
          </div>
          </div>
        </fieldset>
        <br/>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to yours mobile phone.</p>

          <input 
           type="radio"
           id="pushEverything"
           name="pushNotifications"
           value="Everything"
           onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>

          <br/>
          <input 
           type="radio"
           id="pushEmail"
           name="pushNotifications"
           value="Same as email"
           onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>
          <br/>
          <input 
           type="radio"
           id="pushNothing"
           name="pushNotifications"
           value="No Push Notofication"
           onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notofication</label>
        </fieldset>
        <button 
        className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
      </form>
    </div>
  );
}

export default App;
