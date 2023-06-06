import React,{useState} from 'react';
import { FcSearch } from "@react-icons/all-files/fc/FcSearch";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { Link } from 'react-router-dom';
function Searchbar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [mailData, setFilterMail] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  console.log(data);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.firstName.toLowerCase().includes(searchWord.toLowerCase());
        });

        const mailFilter = data.filter((value) => {
          return value.mail.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }

        if (searchWord === "") {
          setFilterMail([]);
        } else {
          setFilterMail(mailFilter);
        }
      };
    
      const clearInput = () => {
        setFilteredData([]);
        setFilterMail([]);
        setWordEntered("");
      };

    return (
        <>
              <div className="col-xxl-8">
            <div class="input-group">
              <input
                
                type="text"
                className='form-control'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
              />
              <button class="input-group-text" id="basic-addon2">
              
                {filteredData.length === 0 && mailData.length === 0 ? (
              <FcSearch className="search-icons" />
          ) : (
            <AiFillCloseCircle id="clearBtn" onClick={clearInput} />
          )}
              </button>
            </div>
            {filteredData.length !== 0 && (
        <ul className="list-group me-5 mb-2">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className='text-dark'>
                  First Name:
             
              <Link className="serachvalue" to='/doctor' >
                <li className='list-group-item'>{value.firstName} </li>
              </Link>
              </div>
            );
          })}
        </ul>
      )}
       
            {mailData.length !== 0 && (
        <ul className="list-group me-5 mb-2">
            <div className='text-dark'>
              Email:
          {mailData.slice(0, 15).map((value, key) => {
           
            return (
            
              <Link className="serachvalue" to='/doctor' >
                 
                <li className='list-group-item'>{value.mail} </li>
              </Link>
             
            );
          })}
           </div>
        </ul>
      )}
          </div>
        </>
    );
}

export default Searchbar;