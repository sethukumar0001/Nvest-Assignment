//******************************************
//****** DetailsPage *************************
//******************************************

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainDiv = styled.div`
margin-top:100px;
background-color:#e7f0c3;
margin-left:300px;
margin-right:300px;
padding-top:30px;
padding-bottom:30px;
padding-left:30px;
`;

const HiDiv = styled.h1`
color:red;
`;
const Tddiv = styled.td`
padding:10px;
background-color:#ff896b;
color:white;
`;
const Thdiv = styled.th`
margin-right:20px;
`;

const DetailsPage = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props.location.state.key) {
            fetch(`https://jsonplaceholder.typicode.com/users?id=${props.location.state.key}`, {
                method: "GET",
            }).then((response) => {
                return response.json()
            }).then((body) => {
                console.log(body)
                setData(body)
            })
        }
    }, [])


    return (

        <MainDiv>
            <center><HiDiv>Details</HiDiv></center>
            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                                        </th>
                        <th>
                            Name
                                        </th>
                        <th>
                            UserName
                                        </th>
                        <th>
                            Contact
                                        </th>
                                        <th>
                            Email Id
                                        </th>
                        <th>
                            Website Link
                                     </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => {
                        return (
                            <tr>
                                <Tddiv>{data.id}</Tddiv>
                                <Tddiv>{data.name}</Tddiv>
                                <Tddiv>{data.username}</Tddiv>
                                <Tddiv>{data.phone}</Tddiv>
                                <Tddiv>{data.email}</Tddiv>
                                <Tddiv>{data.website}</Tddiv>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </MainDiv>

    );
};

DetailsPage.propTypes = {};

export default DetailsPage;

