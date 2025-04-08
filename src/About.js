import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import './style.css';

const About = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [isDataVisible, setDataVisible] = useState(false);
  const buttonRef = useRef(null);

    useEffect(() => {
      const fetchData = async () => {
      try{
        const response = await fetch ('https://randomuser.me/api/?results=5');
        const result = await response.json();
        setPeopleData(result.results);
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    }, []);

    const toggleDataVisibility = () => {
      setDataVisible(!isDataVisible);
    };

    useEffect(() => {
      if (isDataVisible) {
        buttonRef.current.textContent = 'Hide';
      }
      if (!isDataVisible) {
        buttonRef.current.textContent = 'Show';
      }
    }, [isDataVisible]);

    return (
      <div className="about-us-container">
        <h1 className="about-us-title"> About Us</h1>
        <button className="about-us-button" ref={buttonRef} onClick={toggleDataVisibility}> Show </button>
        {isDataVisible && (
          <ul className="about-us-list">
            {peopleData.map((person) => (
              <li className="about-us-list-item" key={person.cell}>
                <img src={person.picture.large} alt="" />
                <span>{person.name.first} {person.name.last}</span>
                <span>{person.email}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };



  
export default About;
