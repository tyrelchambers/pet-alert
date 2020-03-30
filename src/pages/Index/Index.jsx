import React from 'react';
import './Index.css'
import { MainButton, SecButton } from '../../components/buttons/buttons';
import Header from '../../layouts/Header/Header';
import {useHistory} from 'react-router-dom'

const Index = () => {
  let history = useHistory();

  return (
    <div className="index-wrapper">
      <div className="absolute top-0 z-10 right-0
       left-0">
        <Header />
      </div>
      <video autoPlay muted loop id="bgVideo">
        <source src={require('../../assets/bg-video.mp4')} type="video/mp4" />
      </video>
      
      <div className="index-body">
           
      <h1 className="title-hg mb-8">Protect the pet you love. They are family.</h1>
          <p className="text-block mb-16">
          I'm baby butcher asymmetrical swag, irony prism tofu sartorial intelligentsia kombucha occupy fingerstache. Beard lyft ennui gastropub iPhone cronut jianbing meh tbh blue bottle yuccie unicorn hexagon. Af man bun microdosing sustainable tumeric, squid prism mlkshk sartorial cronut trust fund tote bag hella normcore VHS. Single-origin coffee live-edge selfies mixtape tumblr put a bird on it, helvetica intelligentsia cardigan YOLO direct trade occupy.
          </p>
          <MainButton
            text="Protect your pet"
            icon={<i className="fas fa-shield-alt mr-4"></i>}
            onClick={() => history.push('/register')}
          />

          <hr/>

          <SecButton
            text="Search serial number"
            icon={<i className="fas fa-search mr-4"></i>}
            onClick={() => history.push('/search')}
          />
      </div>
    </div>
  );
}

export default Index;
