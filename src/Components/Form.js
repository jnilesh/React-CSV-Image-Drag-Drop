import React from 'react'
import { useStateValue } from '../ContextApi/StateProvider';
import { actionTypes } from '../ContextApi/reducer'
import SearchLocationInput from './SearchLocationInput';

function Form({toStep3}) {

    const [{ user }, dispatch] = useStateValue();

    let address1,bedroom1,bathroom1,description1;

    const setInfo = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_ADDRESS,
            address: address1,
          },
          {
            type: actionTypes.SET_BEDROOM,
            bedroom: bedroom1,
          },
          {
            type: actionTypes.SET_BATHROOM,
            bathroom: bathroom1,
          },
          {
            type: actionTypes.SET_DESCRIPTION,
            description: description1,
          });

          console.log("Done");
          
          toStep3();
    }

    let handleInputChange =(e)=> {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
          window[name]= value;
    }


    return (
        <div>
    <form onSubmit={setInfo}>
      <label>
        Address:
        <SearchLocationInput />
        <br/>
      <input value={address1}
      onChange={handleInputChange}
         type="text" name="name" />
      </label><br/>

      <label>
        Bedroom
        <input
        onChange={handleInputChange}
        value={bedroom1}
        type="number"
        min="1"
        max="10"
        required
      />
      </label><br/>


      <label>
        Bathroom
        <input
        value={bathroom1}
        type="number"
        onChange={handleInputChange}
        min="1"
        max="5"
        required
      />
      </label><br/>


      <label>
        Description
        <textarea
        value={description1}
        onChange={handleInputChange}
        name="Description" id="" cols="30" rows="10"></textarea>
      </label><br/>
      
        <input type="submit" value="Submit" />
      </form>
        </div>
    )
}

export default Form
