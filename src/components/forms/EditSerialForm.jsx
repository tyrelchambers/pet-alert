import React, { useReducer } from 'react';
import { MainButton, SecButton } from '../buttons/buttons';
import { inject, observer } from 'mobx-react';
import Axios from 'axios';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';

const vaccines = []

function reducer(state, action) {
  switch (action.type) {
    case 'insertNew':
      return [
        ...state,
        {
          type: "",
          administered: "",
          expiry: "",
          id: state.length
        }
      ]

    case 'update':
      const item = state.map((x, id) => {
        if (id === action.payload.id) {
          return {
            ...x,
            ...action.payload
          }
        }

        return x
      })
      return [...item]

    case 'remove':
      const copy = [...state]
      copy.splice(action.payload.id, 1)
    
      return [...copy]; 

    case 'initialize':
      return [...action.payload]
    default:
      return state;
  }
}

const EditSerialForm = ({data, SerialStore, ModalStore}) => {
  const [serial, setSerial] = React.useState()
  const [state, dispatch] = useReducer(reducer, vaccines);

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    
    const fn = async () => {
      await Axios.get(`${process.env.REACT_APP_BACKEND}/api/serials/private/${data.uuid}`, {
        headers: {
          token
        }
      }).then(res => {
        setSerial({...res.data.serial})
        dispatch({type: "initialize", payload: res.data.vaccines})
      })
    }

    fn()
  }, [])

  if (!serial) return null;

  const submitHandler = async (e) => {
    e.preventDefault();

    let errors = []

    state.map((x, id) => {
      if (!x.type || !x.administered || !x.expiry) {
        errors.push(id)
      } else {
        errors.slice(id, 1)
      }
    })

    if (errors.length > 0) {
      for (let i = 0; i < errors.length; i++) {
        const row = document.querySelector(`#vacc_${errors[i]}`)
        if (row) {
          row.classList.add("vaccine")
          row.classList.add("error")
        } else {
          if (state[i].type && state[i].administered && state[i].expiry) {
            row.classList.remove("vaccine")
            row.classList.remove("error")
          }
        }
      }
    

      return false;
    }

    const serialId = await SerialStore.edit()
    await SerialStore.editVaccines(serialId.uuid, state)
    ModalStore.setIsOpen(false)
  }

  const insertVaccine = (e) => {
    e.preventDefault();
    dispatch({type: 'insertNew'})
  }

  const removeVaccine = (uuid) => {
    const token = window.localStorage.getItem("token")

    Axios.delete(`${process.env.REACT_APP_BACKEND}/api/vaccines/${uuid}`, {
      headers: {
        token
      }
    })
    .then(res => toast.success("Vaccine removed"))
    .catch(err => toast.error(err.response.body))
  }
  

  return (
    <form className="form form-white center">
      <div className="field-group">
        <label htmlFor="serial" className="label">Serial Number</label>
        <input type="text" className="input" name="serial" value={serial.serialNumber} onChange={e => SerialStore.updateSerial("serialNumber", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Pet Name</label>
        <input type="text" className="input" name="pet" placeholder="enter serial number" value={serial.petName} onChange={e => SerialStore.updateSerial("petName", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Breed</label>
        <input type="text" className="input" value={serial.breed} placeholder="breed of your pet" name="breed" onChange={(e) => SerialStore.updateSerial("breed", e.target.value)}/>
      </div>
      <hr/>
      
      <div className="field-group" id="vaccineWrapper">
        {state.map((x, id) => 
          <DefaultVaccine 
            key={`vacc_${id}`} 
            id={id} 
            data={x} 
            dispatch={dispatch}
            removeVaccine={removeVaccine}
          />)}
        
      </div>
      <div className="mt-4">
        <SecButton
          icon={<i className="fas fa-plus mr-4"></i>}
          text="New Vaccine"
          onClick={e => insertVaccine(e)}
        />
      </div>
      <hr/>

      <div className="mt-4">
        <MainButton
          icon={<i className="fas fa-arrow-alt-circle-right mr-4"></i>}
          text="Update information"
          onClick={e => submitHandler(e)}

        />
      </div>
    </form>
  );
}

const DefaultVaccine = ({id, data, dispatch, removeVaccine}) => (
  data ? <div className="flex flex-row mt-1 mb-1 has-remove" id={`vacc_${id}`}>
  <button className="remove-vaccine" onClick={(e) => {
    e.preventDefault();
    dispatch({type: 'remove', payload: {id}})
    removeVaccine(data.uuid)
  }}>
    <i className="fas fa-minus-circle"></i>
  </button>
  <div className="field-group flex-1 mr-2">
    <label htmlFor="type" className="label">Vaccination - {id + 1}</label>
    <input 
      type="text" 
      className="input"
      placeholder={`vaccination ${id + 1}`} 
      onChange={(e) => dispatch({type: 'update', payload: {id, type: e.target.value}})}
      value={data.type}
      name="type"
    />
  </div>
  <div className="field-group mr-2">
    <label htmlFor="administered" className="label">Administered</label>
    <input 
      type="date" 
      className="date-picker" 
      name="administered" 
      onChange={(e) => dispatch({type: 'update', payload: {id, administered: e.target.value}})}
      value={data.administered ? format(parseISO(data.administered), 'yyyy-MM-dd') : ""}
    />
  </div>
  <div className="field-group">
    <label htmlFor="expiry" className="label">Expiry</label>
    <input 
      type="date" 
      className="date-picker" 
      name="expiry" 
      onChange={(e) => dispatch({type: 'update', payload: {id, expiry: e.target.value}})}
      value={data.expiry ? format(parseISO(data.expiry), 'yyyy-MM-dd') : ""}

    />
  </div>
</div> : null
)


export default inject("UserStore", "SerialStore", "ModalStore")(observer(EditSerialForm));
