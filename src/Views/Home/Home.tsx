// Import
import './HomeStyles.scss'
// Components
import { Card } from '../../components/Card/Card'
import { Course } from '../Course/Course'
export const Home = () => {
    return (
        <div className='body-app'><h1 className='title-home'><i className="fa-solid fa-user-astronaut"></i> COLOMBIAN DEVS CURSOS <i className="fa-solid fa-user-astronaut"></i></h1>
            <div className='carrousel'>
                <Card title="Blender" decoration={<i className="fa-solid fa-blender"></i>}  url="https://github.com/cjcorpdev"/>
                <Card title="Unity" decoration = {<i className="fa-brands fa-unity"></i>} url=""/>
                <Card title="JavaScript" decoration = {<i className="fa-brands fa-js-square"></i>} url="#"/>
                <Card title="HTML" decoration={<i className="fa-brands fa-html5"></i>} url="#"/>
                <Card title="SASS" decoration={<i className="fa-brands fa-sass"></i>} url="#"/>
                <Card title="C#" decoration={<i className="fa-solid fa-wand-magic-sparkles"></i>} url="#"/>
                <Card title="C++" decoration={<i className="fa-solid fa-vial"></i>} url="#"/>
                <Card title="IA" decoration = {<i className="fa-solid fa-sitemap"></i>} url="#"/>
            </div>
            <div>
                <Course titleCourse = "videos de cursos"/>
            </div>
        </div>
    )
}
