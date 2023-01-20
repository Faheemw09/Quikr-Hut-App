import { Divider , Button,Center } from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaGoogle, FaApple, FaGooglePlay, FaMicrosoft, } from 'react-icons/fa'
import React from "react";

const Footer = () => {
  return (
    <div style={{ marginTop:"27px"}}>
    
    <hr/>
    <div style={{ width: "1090px",
    boxshadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
   
    margin: "auto",
    width: "auto",
    height:"330px",
    marginTop:"20px"}} >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1090px",
        
        margin: "auto",
        height:"290px",
        
      }}
    >
       
      <div
        style={{
         
          width: "700px",
          paddingLeft: "100px",
          height:"280px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            marginTop: "18px",
          }}
        >
          <p>About Us</p>
          <p> Contact Us</p>
          <p> Careers</p>
          <p> Quikr</p>
          <p>Videos</p>
          <p>Advertise With Us</p>
          <p> Blog</p>
          <p>Help </p>
          <p> Premium Ads</p>
        </div>
        <div
          style={{
            fontSize: "12px",
            paddingTop: "15px",
            marginTop: "18px",
            textAlign: "left",
          }}
        >
          <p>
            Widely known as India’s no. 1 online classifieds platform, Quikr is
            all about you. Our aim is to empower every person in the country to
            independently connect with buyers and sellers online. We care about
            you — and the transactions that bring you closer to your dreams.
            Want to buy your first car? We’re here for you. Want to sell
            commercial property to buy your dream home? We’re here for you.
            Whatever job you’ve got.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            marginTop: "18px",
            height:"40px",
           boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
        >
          <p>
            At Quikr, you can buy, sell or rent anything you can think of.{" "}
            <button
              style={{
                border: "1px solid gold",
                height: "30px",
                width: "90px",
                backgroundColor: "#fcec52",
                color: "black",
               fontWeight:"bold"
              }}
            >
              <h5>Post Free Ad</h5>
            </button>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            marginTop: "18px",
          }}
        >
          <p>Listing Policy</p>
          <p>Terms of Use </p> <p> Privacy Policy</p>{" "}
          <p> Quikr Mobiles Policy </p> <p>Quikr Brand Guidelines </p>{" "}
          <p>Sitemap News </p>
        </div>
        <div
          style={{
            display: "flex",
            // justifyContent: "space-evenly",
            gap:"20px",
            fontSize: "12px",
            marginTop: "18px",
            paddingRight:"10px",
          }}
        >
          <p>Other Brands: Commonfloor</p>
          <p>Hiree</p> <p>  Dazzlr</p>
          <p> Realty Compass </p> <p> Zefo</p>
         
        </div>

      </div>


      <Center height='300px' width={"20px"} p={4}>
  <Divider orientation='vertical' />
</Center>

     
      <div>
      
      <div  style={{
        display: "flex",
        justifyContent: "space-between",
        width: "300px",
        
        marginRight: "60px",
        height:"120px" ,
        fontSize: "12px",
        marginTop: "18px",
        textAlign:"left"}}>
        <div  >
            <p>Ahmedabad</p>
            <p>Bangalore</p>
            <p>Chandigarh</p>
            <p>Chennai</p>
            <p>Coimbatore</p>
            <p>All Cities</p>
        </div>
        <div>
            <p>Delhi</p>
            <p>Gurgaon</p>
            <p>Hyderabad</p>
            <p>Jaipur</p>
            <p>Kochi</p>
        </div>
        <div>
            <p>Kolkata</p>
            <p>Lucknow</p>
            <p>Mumbai</p>
            <p>Pune</p>
            <p>Trivandrum</p>
        </div>
      </div>
     <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "220px",
       
        marginRight: "60px",
        height:"25px" ,
        fontSize: "13px",
        marginTop: "18px",
        textAlign:"left",
        fontWeight:"bold"}}>
        <h5>follow us</h5>

        <Button label={'Twitter'} href={'#'} size='xs'>
              <FaTwitter />
            </Button>
            <Button label={'YouTube'} href={'#'} size='xs'>
              <FaYoutube />
            </Button>
            <Button label={'Instagram'} href={'#'} size='xs'>
              <FaInstagram />
            </Button>
            <Button label={'linkedin'} href={'#'} size='xs'>
              <FaLinkedin />
            </Button>
            <Button label={'Google'} href={'#'} size='xs'>
              <FaGoogle />
            </Button>


     </div>
     <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "220px",
       
        marginRight: "60px",
        height:"25px" ,
        fontSize: "13px",
        marginTop: "18px",
        textAlign:"left",
        fontWeight:"bold"}}>
        <h5>Download The App</h5>
        
        <Button label={'Apple'} href={'#'} size='xs'>
              <FaApple />
            </Button>
            <Button label={'Playstore'} href={'#'} size='xs'>
              <FaGooglePlay />
            </Button>
            <Button label={'Microsoft'} href={'#'} size='xs'>
              <FaMicrosoft />
            </Button>
           


     </div>



      </div>
  
    </div >
    <hr/>
    <div style={{fontSize:"13px"}}>
    Copyright © 2008 - 2023 QuikrHut India Private Limited
    </div>
    </div>
    </div>
  );
};

export default Footer;
