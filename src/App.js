import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const fetchRandomData = (number) => {
 return axios
  .get(`https://randomuser.me/api?page = ${number}`)
  .then(({ data }) => {
   return data;
  })
  .catch((err) => {
   console.error(err);
  });
};

const getUserName = (userInfo) => {
 //  console.log(typeof userInfo);
 const {
  name: { first, last },
 } = userInfo;
 return `${first} ${last}`;
};
const App = () => {
 const [userData, setUserData] = useState('');
 const [userInfos, setUserInfos] = useState([]);
 const [nextPage, setNextPage] = useState(1);

 // Pagination part
 const fetchNextUser = () => {
  fetchRandomData(nextPage).then((randomData) => {
   const newUserInfos = [...userInfos, ...randomData.results];
   setUserInfos(newUserInfos);
   setNextPage(randomData.info.page + 1);
  });
 };

 useEffect(() => {
  fetchNextUser(nextPage);
 }, []);

 //First 2 questions
 //  useEffect(() => {
 //   fetchRandomData().then((randomData) => {
 //    setUserData(JSON.stringify(randomData) || '');
 //    setUserInfos(randomData.results);
 //    console.log(userInfos);
 //    setNextPage(randomData.info.page + 1);
 //   });
 //  }, []);
 return (
  <>
   {/* <p>{userData}</p> */}

   <br />
   <br />
   <br />
   <div style={{ margin: 'auto', width: '30%' }}>
    {userInfos.map((userInfo, idx) => (
     <Card style={{ width: 400, height: '100%', paddingBottom: 20 }}>
      <br />
      <h2 style={{ textAlign: 'center' }}>User Profile {idx + 1}</h2>
      <hr />
      <br />
      <div key={getUserName(userInfo)} style={{ justifyContent: 'center' }}>
       <p style={{ textAlign: 'center' }}>Name : {getUserName(userInfo)}</p>
       <p style={{ textAlign: 'center' }}>Date of birth : {userInfo.dob.date.substring(0, 10)}</p>
       <pre style={{ textAlign: 'center' }}>Email: {userInfo.email}</pre>
       <pre style={{ textAlign: 'center' }}>Gender: {userInfo.gender}</pre>
       <pre style={{ textAlign: 'center' }}>Phone Number: {userInfo.phone}</pre>

       <img
        style={{ width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
        src={userInfo.picture.medium}
       />
       <hr />
      </div>
      <Button onClick={fetchNextUser}>Load another user</Button>
     </Card>
    ))}
   </div>
  </>
 );
};

export default App;
