import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Button } from '@mui/material';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Hoteldetails = () => {

    const styles = {
        display: "flex",
        justifyContent: "center",
        marginTop: "5vh"
    }
    const badgeStyle = {
        "& .MuiBadge-badge": {
            width: 100,
            height: 30,
            borderRadius: '5%',
            right: "27vw",
            top: "40vh"
        }
    }

    const [data, setData] = useState([]);
    const [hotel, setHotel] = useState(data);
    const { id } = useParams();

    const fetchJson = () => {
        fetch('../hotels.json')
            .then(response => {
                return response.json();
            }).then(data => {
                setData(data)
                data.forEach(element => {
                    if (element.hotel_id === parseInt(id))
                        setHotel(element);
                });
            }).catch((e) => console.log(e));
    }

    useEffect(() => {
        fetchJson();
    }, []);

    return (
        <div style={styles}>
            <div className="hotel">
                <Badge
                    badgeContent={"Popular"}
                    color='primary'
                    invisible={hotel.rating_average < 8}
                    sx={badgeStyle}
                />
                <img
                    className="poster"
                    src={hotel.photo1}
                    alt={hotel.hotel_name}
                />
                <div className="img-top">
                    <div>
                        <Button variant='outlined' style={{
                            borderRadius: 30,
                            padding: "8px 12px",
                            backgroundColor: "whitesmoke"
                        }}>For Rent</Button>
                    </div>
                    <div className='heart-button'><FavoriteBorderIcon /></div>
                </div>
                <div className='details1'>
                    <div className='subTitle'>
                        <LocationOnIcon />8558 Green Rd.
                    </div>
                    <b className="title">{hotel.hotel_name}</b>
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
        </div>
    )
}

export default Hoteldetails;