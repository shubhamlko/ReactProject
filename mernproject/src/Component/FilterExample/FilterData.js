import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const FilterData = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function likeHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("liked Remove")
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id])
            }
            else {
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully")
        }
    }
    return (

        <>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='card mb-3'>
                    <div className='img-box'>
                        <img className="card-img-top" src={course.image.url} alt="Card image cap" />
                    </div>
                    <div className="card-body position-relative">
                        <div className='likeIcon' onClick={likeHandler}>
                            {
                                !likedCourses.includes(course.id) ? (<FcLikePlaceholder />) : (<FcLike></FcLike>)
                            }

                        </div>
                        <h5 className="card-title">{course.title}</h5>

                        <p className="card-text">
                            {
                                course.description
                            }


                        </p>

                    </div>
                </div>
            </div>


        </>
    )
}

export default FilterData