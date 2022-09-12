import React, { useState } from "react";

import './App.css';

function App() {

   const [list,setList]=useState(userList);
   const [user,setUser]=useState(null);
   const [input,setInput]=useState('');
   const onselectUser=(item)=>{
    setUser(item)
   }

   const onSearch=(e)=>{
    let {value}=e.target;
    setInput(value);
    let arr=userList.filter((item)=>{
      return item.firstName.toLowerCase().includes(value.toLowerCase())
    })
    setList(arr)
   }

  
  return (
        
    <main>

        <div id="table-section">

            <form action="/">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="Search Icon" />
                <input type="text" placeholder="Enter something" name="search-box" id="search-box" value={input} onChange={onSearch} />
            </form>

            <div id="table-wrapper">

                <div id="table-headers">
                    <table>
                        <thead>
                            <tr>
                                <th className="column1">Id</th>
                                <th className="column2">FirstName</th>
                                <th className="column3">LastName</th>
                                <th className="column4">Email</th>
                                <th className="column5">Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div id="table-data">
                    <table>
                        <tbody>{list.map((item)=>{

                          return(

                            <tr key={item.id} className={`${"data-row"} ${user!= null&&user.id===item.id&&"active"}`} 
                             onClick={()=>{onselectUser(item)}}
                             >
                            <td class="column1">{item.id}</td>
                            <td class="column2">{item.firstName}</td>
                            <td class="column3">{item.lastName}</td>
                            <td class="column4">{item.email}</td>
                            <td class="column5">{item.phone}</td>
                            </tr>

                          )

                        })}

                           
                           
                        </tbody>
                    </table>
                </div>

            </div>

        </div>


        

        <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            {
            user!=null &&(
            <div id="info-content">
                <div><b>User selected:</b>{`${user.firstName} ${user.lastName}`}</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                    </textarea>
                </div>
                <div><b>Address:</b>{user.address}</div>
                <div><b>City:</b>{user.city}</div>
                <div><b>State:</b>{user.state}</div>
                <div><b>Zip:</b>{user.zip}</div>
            </div>
            )
            }
        </div>

    </main>
  )
                
}

export default App;


const userList=[
  {
    id:"28",
    firstName:"Larisa",
    lastName:"Llaneza",
    email:"SCallison@non.org",
    phone:"(763)248-9034",
    address:'st2,mall road',
    city:'Indore',
    state:'MP',
    zip:'111111',
  },
  {
    id:"835",
    firstName:"Marcellin",
    lastName:"Shrestha",
    email:"ARose@sagittis.ly",
    phone:"(801)653-7547",
    address:'st2,main road',
    city:'Bhopal',
    state:'MP',
    zip:'222222',
  },
  {
    id:"654",
    firstName:"Tany",
    lastName:"Gonshor",
    email:"PPervaiz@nullam.io",
    phone:"(376)035-7184",
    address:'st2,Bazar road',
    city:'Mumbai',
    state:'Maharashtra',
    zip:'333333',
  },
  {
    id:"943",
    firstName:"Sritharan",
    lastName:"Worden",
    email:"DLencowski@tortor.ly",
    phone:"(714)779-2847",
    address:'3rd road',
    city:'Nagpur',
    state:'Maharashtra',
    zip:'444444',
  },
  {
    id:"796",
    firstName:"Josephine",
    lastName:"Geouque",
    email:"KChristopher@amet.io",
    phone:"(421)120-7963",
    address:'BTM',
    city:'Bangalore',
    state:'Karnataka',
    zip:'555555',
  },
  {
    id:"339",
    firstName:"Yu",
    lastName:"Ferreira",
    email:"KHeppelmann@amet.com",
    phone:"(101)002-6875",
    address:'xyz',
    city:'Mangalore',
    state:'Karnataka',
    zip:'666666',
  },
  {
    id:"25",
    firstName:"Kathy",
    lastName:"Hansen",
    email:"MJacobs@lacus.io",
    phone:"(984)584-1749",
    address:'aaa',
    city:'Chennai',
    state:'Tamilnadu',
    zip:'777777',
  },
  {
    id:"833",
    firstName:"Deitric",
    lastName:"Whitman",
    email:"JRamsey@tortor.io",
    phone:"(301)556-8434",
    address:'Hitech City',
    city:'Hyderabad',
    state:'Telangana',
    zip:'888888',
  },
  {
    id:"856",
    firstName:"Yeqing",
    lastName:"Elshoff",
    email:"RKimmel@tincidunt.com",
    phone:"(230)488-3157",
    address:'bbb',
    city:'shimla',
    state:'Himachal Pradesh',
    zip:'999999',
  },

]