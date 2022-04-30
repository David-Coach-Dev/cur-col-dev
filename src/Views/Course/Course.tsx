import React from 'react'
// Styles
import './CourseStyles.scss'
// JSON DATA
import curso from "../../json/curso.json";
//interface
interface Props {
  titleCourse: string;
  onClick?: () => void;
}
export const Course = ({titleCourse}:Props) => {
  const course = curso.map((curso) => {
      return (
        <>
          <span className='title'>{curso.title}</span>
          <button >
            <span className="button_top">Ver ahora</span>
          </button>
        </>
      )
    }
    )
    return(
      <>
        <div className="card" >
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
            <h1 className='title-home'>{titleCourse}</h1>
          <div className="card__content">
            <div className="card-container">
              {course}
            </div>
          </div>
        </div>
      </>
    )
}

