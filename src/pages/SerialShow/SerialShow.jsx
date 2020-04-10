import React from 'react';
import {useParams} from 'react-router-dom'
import Display from '../../layouts/Display/Display';
import Map from '../../components/Map/Map';
import { inject, observer } from 'mobx-react';
import Axios from 'axios';
import {format} from 'date-fns'
import './SerialShow.css'

const SerialShow = ({UserStore}) => {
  const [serial, setSerials] = React.useState();
  const [vaccines, setVaccines] = React.useState();

  let {slug} = useParams();

  React.useEffect(() => {
    const fn = async () => {
      await Axios.get(`${process.env.REACT_APP_BACKEND}/api/serials/${slug}`).then(res => {
        setSerials({...res.data.serial})
        setVaccines([...res.data.vaccines])
      })
    }

    fn()
  }, []);

  if (!serial || !vaccines) return null;

  const contactList = (
    <div className="contacts-wrapper bg m-2">
      <p className="title-sm accent-primary">{serial.firstName} {serial.lastName}</p>
      <p>{serial.phoneNumber}</p>
    </div>  
  ) 

  const vaccineList = vaccines.map((x, id) => 
    <div className="vaccine bg flex flex-row">
      <div className="flex flex-col mr-4">
        <h3>Type</h3>
        <p>{x.type}</p>
      </div>

      <div className="flex flex-col mr-4">
        <h3>Administered</h3>
        <p>{format(new Date(x.administered), "do MMM, y")}</p>
      </div>

      <div className="flex flex-col mr-4">
        <h3>Expiry</h3>
        <p>{format(new Date(x.expiry), "do MMM, y")}</p>
      </div>
    </div>
  )
  return (
    <Display>
      <div className="flex flex-col w-full">
        <div className="bg">
          <h1 className="title-lg">Serial Number: {serial.serialNumber}</h1>
        </div>
   
        <div className="mt-8 flex flex-col">
          <div className="mr-8 flex flex-row items-center">
            <h3 className="title-lg header standout"><i className="fas fa-dog mr-4"></i> Pet's name</h3>
            <p className="standout value">{serial.petName}</p>
          </div>
          
          <div className="flex flex-row items-center">
            <h3 className="title-lg header standout"><i className="fas fa-paw mr-4"></i> Breed</h3>
            <p className="standout value">{serial.breed}</p>
          </div>
        </div>
        <hr/>
        <div className="mt-16">
          <h3 className="title-md mb-4">Nearest Veterinary Office</h3>
          <Map/>
        </div>

        <div className="mt-16">
          <h3 className="title-md">Owner Information</h3>
          <div className="flex flex-row">
            {contactList}
          </div>

          <h3 className="title-md mt-8">Vaccinations</h3>
          <div className="flex flex-row items-center mt-4">
            {vaccineList}
          </div>
        </div>
      </div>
    </Display>
  );
}

export default inject("SerialStore", "UserStore")(observer(SerialShow));
