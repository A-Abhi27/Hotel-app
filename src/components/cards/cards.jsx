import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './cards.css';
import { Badge, Button } from '@mui/material';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const Cards = ({
  id,
  name,
  poster,
  rating
}) => {

  const badgeStyle = {
    "& .MuiBadge-badge": {
      width: 100,
      height: 30,
      borderRadius: '5%',
      right: "26vw",
      top: "41vh"
    }
  }

  //implementing loading skeleton
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])


  //render data based on provided props
  return (
    isLoading
      ?
      <div className="hotel">
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton height={600} duration={1} />
        </SkeletonTheme>
      </div>
      :
      <Link to={`/property/${id}`} style={{ textDecoration: "none" }}>
        <div className="hotel">
          <Badge
            badgeContent={"Popular"}
            color='primary'
            invisible={rating < 8}
            sx={badgeStyle}
          />
          <img
            className="poster"
            src={poster}
            alt={name}
          />
          <div className="img-top">
            <div>
              <Button variant='outlined' style={{
                borderRadius: 30,
                padding: "8px 12px",
                backgroundColor:"whitesmoke"
              }}>For Rent</Button>
            </div>
            <div className='heart-button'><FavoriteBorderIcon /></div>
          </div>
          <div className='details1'>
            <div className='subTitle'>
              <LocationOnIcon />8558 Green Rd.
            </div>
            <b className="title">{name}</b>
          </div>
          {/* hardcoding some values due to absebce of data */}
          <div className='details2'>
            <div className='detail-element'><CorporateFareIcon /><p>3 Rooms</p></div>
            <div className='detail-element'><BedIcon /><p>4 Bed</p></div>
            <div className='detail-element'><BathtubIcon /><p>1 Bath</p></div>
            <div className='detail-element'><OpenWithIcon /><p>732 sft</p></div>
          </div>
          <div className='pricing'>
            <div style={{ fontSize: "25px", padding: "5px", color: "blue" }}>$7,255 <span style={{ fontSize: "14px" }}>/month</span></div>
            <div className='pricing'>
              <Button variant='outlined' style={{
                borderRadius: 30,
                padding: "12px 20px",
              }}>Read more</Button></div>
          </div>
        </div>
      </Link>
  );
};

export default Cards;