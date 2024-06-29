import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await axios.get('http://localhost:5000/api/services');
      setServices(res.data);
    };

    fetchServices();
  }, []);

  return (
    <div id="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map(service => (
          <div className="service" key={service._id}>
            <h3>{service.type}</h3>
            <p>{service.description}</p>
            <ul>
              {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <p>Price: ${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
