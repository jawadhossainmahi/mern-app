import React, { useContext, useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import mainContext from '../context/mainContext';

const Home = () => {
    const [foodCategories, setFoodCategories] = useState([]);
    const [foodItems, setFoodItems] = useState([]);
    const { search, setSearch } = useContext(mainContext);
    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await response.json();
        setFoodItems(data.foodItems)
        setFoodCategories(data.foodCategories)
    }

    useEffect(() => {
        loadData();
        return () => {

        };
    }, []);
    // console.log(search)
    return (
        <div>
            <div><Navbar /></div>
            <div>
                <Carousel />
            </div>

            <div className='container'>
                {
                    foodCategories !== undefined && foodCategories.length > 0
                    && foodCategories.map((category) => {
                        return (
                            <>
                                <div key={category._id} className='fs-3 m-3'>
                                    {category.CategoryName}
                                </div>
                                <hr />
                                <div className='row mb-5'>
                                    {
                                        foodItems !== undefined && foodItems.length > 0 ?
                                            foodItems.filter((item) => ((item.CategoryName == category.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))).map((filter_item) => {
                                                return (
                                                    <>
                                                        <div key={filter_item._id} className='col-12 col-md-4 '>
                                                            <Card foodItem={filter_item} />
                                                        </div>
                                                    </>
                                                )
                                            }) : " No Items"
                                    }
                                </div>

                            </>
                        )
                    })
                }

            </div>
            <div><Footer /></div>
        </div>
    );
}

export default Home;
