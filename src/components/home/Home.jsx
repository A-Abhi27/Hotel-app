import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Cards from '../cards/cards';
import './home.css'
import { ArrowForward } from '@mui/icons-material';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

function Home() {


    //fetching data from a local JSON file
    const fetchJson = () => {
        fetch('./hotels.json')
            .then(response => {
                return response.json();
            }).then(data => {
                setData(data);
            }).catch((e) => console.log(e));
    }
    //managing the state variables
    const [cards, setCards] = useState(3);
    const [tab, setTab] = useState("London");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data);

    const handleClick = (event) => {
        setTab(event.target.textContent);
        setCards(3);
    };

    const handlePageChange = () => {
        setCards(cards + 3);
    }

    //Keeping track of the cards to show indexed data
    const endindex = cards + 3;
    const startIndex = 0;

    //filter data to show relevant results
    const filterData = () => {
        const filteredData = data.filter(item =>
            item.city === tab
        );
        setFilteredData(filteredData);
    };

    useEffect(() => {
        fetchJson();
        filterData()
    }, [filteredData,endindex, tab]);

    return (
        <div>
            <div className='caption'>
                <h1 style={{ fontWeight: "bolder", fontSize: "50px", margin: "6px" }}>Featured Listed Property</h1>
                <div className='capText'>Real estate can be bought, sold, leased, or rented, and can be a </div>
                <div className='capText'>valuable investment opportunity. The value of a real estate can be...</div>
            </div>
            <div className='header'>
                <div className='header-items'>
                    <div className={tab === "New York" ? "active" : 'tabs'} onClick={handleClick}>New York</div>
                    <div className={tab === "Shanghai" ? "active" : 'tabs'} onClick={handleClick}>Shanghai</div>
                    <div className={tab === "Paris" ? "active" : 'tabs'} onClick={handleClick}>Paris</div>
                    <div className={tab === "London" ? "active" : 'tabs'} onClick={handleClick}>London</div>
                </div>
                <div className='header-items'>
                    <Button variant='outlined' style={{
                        borderRadius: 30,
                        padding: "12px 20px",
                    }}>View all <ArrowForward /></Button>
                </div>
            </div>
            {/* Rendering data based on the results */}
            <div className='cars'>
                {filteredData &&
                    filteredData.slice(startIndex, endindex).map((c) => (
                        <Cards
                            key={c.hotel_id}
                            id={c.hotel_id}
                            poster={c.photo1}
                            name={c.hotel_name}
                            address={c.addressline1}
                            rating={c.rating_average}
                        />
                    ))}
                {/* on button click load 3 more cards */}
                <div className='pagination'>
                    <Button variant='contained'
                        onClick={handlePageChange}
                        style={{
                            borderRadius: 30,
                            padding: "12px 20px",
                            margin: "20px 0"
                        }}><HourglassTopIcon /> Load more</Button>
                </div>
            </div>
        </div>

    );
}

export default Home;