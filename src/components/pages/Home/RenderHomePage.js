import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import styled, {Styled} from "styled-components";
import axios from 'axios';
import { Menu, Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { connect } from "react-redux";

import {getOrgs} from "../../../state/actions/index";



// Dummy data used for test purposes
import orgList from "./dummydata";

import OrgCard from "./OrgCard";

const StyledButton = styled.button`
background-color:none;
border: none;
color: black;
`;

const StyledHeader = styled.header`
display:flex;
background-color: rgb(30,12,134);
justify-content: space-between;
height: 6rem;
align-items: center;
`;


const StyledHeaderDiv = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
margin-left: 30%;
`;

const StyledCarDiv = styled.div`
width:100%;
display: flex;
flex-wrap: wrap;

`;


const StyledHeaderText = styled.div`
text-align: center;
margin-top: 1rem;
`;



function RenderHomePage(props) {
  const { userInfo, authService } = props;


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


useEffect(() => {
  props.getOrgs();
}, []);

  return (
    <div>
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
      <StyledHeaderText>
        <h2>Welcome back {userInfo.name}!</h2>
      </StyledHeaderText>
      <div id="org-list-cnt">
        { props.isLoading ? "Loading Orgs" :
          props.orgs.map(org => {
            return (
              <StyledCarDiv>
                  <OrgCard name={org.name} location={org.location} description={org.description} />
              </StyledCarDiv>
            );
          })
        }
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    orgs: state.orgs,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, {getOrgs})(RenderHomePage);
