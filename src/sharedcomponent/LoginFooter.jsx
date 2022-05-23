import React, { useState } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, InputLabel } from '@mui/material';

function LoginFooter() {

  return (
    <div className='loginFooter clearfix'>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <h2>Sanutanu</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled</p>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <h3>TAGS</h3>
                <ul className='fList2'>
                  <li><a href="#_">sale</a></li>
                  <li><a href="#_">Collection</a></li>
                  <li><a href="#_">Shop</a></li>
                  <li><a href="#_">Brand</a></li>
                  <li><a href="#_">T-Shirt</a></li>
                  <li><a href="#_">Top</a></li>
                  <li><a href="#_">New</a></li>
                  <li><a href="#_">Accessories</a></li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <h3>CATEGORIES</h3>
            <ul className='fList1'>
              <li><a href="#_">About Us</a></li>
              <li><a href="#_">Contact Us</a></li>
              <li><a href="#_">Contribute</a></li>
              <li><a href="#_">Privacy Policy</a></li>
              <li><a href="#_">Sitemap</a></li>
            </ul>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <h3>COMPANY</h3>
            <ul className='fList1'>
              <li><a href="#_">Find Us</a></li>
              <li><a href="#_">Help</a></li>
              <li><a href="#_">FAQ</a></li>
            </ul>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <h3>CONTACT</h3>
            <p>D-415, Kamla Vihar
              Mahavir Nigar,
              Kandivali(WEST)</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LoginFooter;