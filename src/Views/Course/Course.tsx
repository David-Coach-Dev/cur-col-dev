// Styles
import './CourseStyles.scss'
// JSON DATA
import curso from "../../json/curso.json";
import { Video } from '../video/Video';
//interface
interface Props {
  titleCourse: string;
}
export const Course = ({titleCourse}:Props) => {
  const course = curso.map((curso) => {
      return (
        <>
          <div className='course'>
            <div className='course-container'>
              <span className='title'>{curso.title}</span>
            </div>
            <div className='video-container'>
              <Video source={curso.url} h={640} w={640} />
            </div>
          </div>
        </>
      )
    }
    )
    return(
      <>
        <div className='course'>
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
            <div>
              <h1 className='title-course'>{titleCourse}</h1>
            </div>
          </div>
          <div className='rep-container'>
            {course}
          </div>
          </div>
      </>
    )
}
