// Styles
import './CardStyle.scss'
// Interface
interface Props {
  title: string;
  decoration: any;
  url?: string;
  onClick?: () => void;
}
// Card
export const Card = ({ title, decoration, url, onClick}: Props) => {
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
        <div className="card__content">
          <div className="card-container">
            <span className='title'>{title} { decoration } </span>
            <button>
              <span className="button_top"> Ver Ahora </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
};
