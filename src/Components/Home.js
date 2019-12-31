//******************************************
//****** HomePage  *************************
//******************************************

import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainDiv = styled.div`
margin-top:100px;
background-color:#e7f0c3;
margin-left:600px;
margin-right:600px;
padding-top:30px;
padding-bottom:30px;
padding-left:30px;

`;
const ListItems = styled.li`

cursor:pointer;
font-size:20px;
`;

const HiDiv = styled.h1`
color:red;
`;

const HomePage = (props) => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`,{
            method:"GET"
        }).then((response)=>{
            return response.json()
        }).then((body)=>{
            console.log(body)
            setData(body)
        })
    },[])

    const Details =(id)=>{


        props.history.push({
            pathname: '/detailsPage',
            state: {
              key: id
            }
          })


    }
    return (
        <MainDiv>
            <HiDiv>Click To Get Details</HiDiv>
            <ul>
            {data.map((data)=>{
            return <ListItems onClick={() => Details(data.id)}>{data.name}</ListItems> 
            })}
            </ul>
        </MainDiv>
    );
};

HomePage.propTypes = {};

export default HomePage;
