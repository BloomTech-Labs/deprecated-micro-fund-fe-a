import Axios from "axios";
import React, {useState, useEffect} from "react";
import {useHistory, Link} from "react-router-dom";
import Styled from "styled-components";

import axios from "axios";

import { connect } from "react-redux";

//Ant Design imports
import { Menu, Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import {getUser} from "../../state/actions/index";

const StyledHeader = Styled.header`
display:flex;
background-color: rgb(30,12,134);
justify-content: space-between;
height: 6rem;
align-items: center;
`;

const StyledHeaderDiv = Styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
margin-left: 30%;
`;

const UserCardContainer = Styled.div`
border: 1px solid grey;
display: flex;
margin: 12rem 0px 0px 22rem;
width: 50%;
`;

const UserInfo = Styled.div`
border-right: 1px solid grey;

`;

const UserDescription = Styled.div`
`;

const UserPage = props => {

  useEffect(() => {
    props.getUser();
  }, []);

    const { userInfo, authService } = props;

    const [userEmail, setUserEmail] = useState("");

    const {
        push
    } = useHistory();

    const changeHandler = e => {
        let name = e.target.name;
        let value = e.target.value;
        setUserEmail({
            ...userEmail,
            [name]: value,
        });
    };

    const deleteAccount = () => {
        //used to delete user account if needed
    };


    const updateUser = updatedUser => {
        Axios.put("", updatedUser)
        .then(res => {
            console.log(res.data);
            let newEmail = JSON.parse(res.data).email;
            setUserEmail(newEmail);
        })
        .catch(err => {
            console.log(err);
        });
    };


    const submitHandler = e => {
        e.preventDefault();
        const updatedUser = {
            ...userEmail
        };
        updateUser(updatedUser);
        push('/');
    };

    const menu = (
        <Menu>
          <Menu.Item key="1" icon={<UserOutlined/>} onClick={() => authService.logout()}>
            Logout
          </Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined/>} >
            <Link to="/edit">Edit User</Link>
          </Menu.Item>
        </Menu>
      );

    return (
        <>
        <StyledHeader>
      {/* <img id="header-micro-img" alt="Microfund Logo" src="" /> */}
      
      <StyledHeaderDiv>
      <h1><Link to="/">Microfund</Link></h1>
            <Space wrap>
          <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
            User Options
          </Dropdown.Button>
        </Space>,
        </StyledHeaderDiv>
          </StyledHeader>
        <UserCardContainer>
           <UserInfo>
            <h1>{props.user.username}</h1>
            <h2>{props.user.lastname},{props.user.firstname}</h2>
           </UserInfo>

           <UserDescription>
               <p>
               {props.user.description}
               </p>
           </UserDescription>
        </UserCardContainer>
        </>
    );
};


const mapStateToProps = state => {
    return {
      user: state.user,
      isLoading: state.isLoading,
    };
};


export default connect(mapStateToProps, {getUser})(UserPage);