import React from 'react';
import {useParams} from 'react-router-dom'
import Display from '../../layouts/Display/Display';
import PetProfile from '../../layouts/PetProfile/PetProfile';
import Map from '../../components/Map/Map';
import { inject, observer } from 'mobx-react';
import Axios from 'axios';

const SerialShow = ({UserStore, SerialStore}) => {
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

  if (!serial) return null;

  const contacts = UserStore.contacts.map((x, id) => 
    <div className="contacts-wrapper bg m-2" key={id}>
      <p className="title-sm accent-primary">{x.firstName} {x.lastName}</p>
      <p>{x.phoneNumber}</p>
    </div>
  )

  return (
    <Display>
      <div className="flex flex-col w-full">
        <div className="bg">
          <h1 className="title-lg">Serial Number: {serial.serialNumber}</h1>
        </div>
   
        <div className="mt-8 flex flex-row">
          <p className="title-md mr-10">Pet Name: {serial.petName}</p>
          <p className="title-md">Breed: {serial.breed}</p>
        </div>

        <div className="mt-16">
          <h3 className="title-md mb-4">Nearest Veterinary Office</h3>
          <Map/>
        </div>

        <div className="mt-16">
          <h3 className="title-md">Contact Information</h3>
          <div className="flex flex-row">
            {contacts}
          </div>

          <h3 className="title-md mt-8">Vaccinations</h3>
          <div className="flex flex-row items-center">
            {/* {vaccines} */}
          </div>
        </div>
      </div>
    </Display>
  );
}

export default inject("SerialStore", "UserStore")(observer(SerialShow));
