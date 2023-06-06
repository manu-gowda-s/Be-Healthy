import {Layout } from 'antd';
import React from 'react';
import Multiform from './Multiform';
import './doctor.css';
import Image from './Image';


const {  Content, Footer } = Layout;



const Main = () => (
  <>
 

<h2 className='display-5 text-center text-uppercase pt-3'>Profile Creation</h2>
   
  
      <div className='container mt-5' >
    
        <Image/>
      </div>
   
    <Content
        className="site-layout-content"
        style={{
          margin: '50px 20px',
          padding: '24px 16px',
          minheight: 680,
          //backgroundImage: "linear-gradient(#D3CCE3,#E9E4F0)"
        }}
    >
   
    <Multiform/>
  
       
   
    </Content>
 
  
  </>
);

export default Main;

