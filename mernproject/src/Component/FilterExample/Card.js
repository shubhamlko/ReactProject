import React, { useState } from 'react'
import FilterData from './FilterData';

const Card = (props) => {

    let courses = props.courses;
    const [likedCourses, setLikedCourses] = useState([]);
    // let category = props.category;
    console.log("data coming from card.js")
    console.log(courses);

    // function getCourses() {
    //     if(category === "all"){
    //         let allCourses = [];
    //     Object.values(courses).forEach(array => {
    //         array.forEach(courseData => {
    //             allCourses.push(courseData)
    //         })
    //     })
    //     return allCourses;
    //     }
    //     else{
    //         return courses[category]
    //     }
    // }

    function getCourses() {

        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData)
            })
        })
        return allCourses;

    }

    return (
        <>
            <div className='container'>
                <div className='row'>


                    {
                        getCourses().map((course) => (
                            <FilterData key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Card