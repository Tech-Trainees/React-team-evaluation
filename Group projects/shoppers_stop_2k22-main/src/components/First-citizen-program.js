import '../assets/styles/clearance_sale.css';
import krish from '../assets/images/first-citizen-pic.png'
function First_citizen_program(){
return(
    <div>
        <div className="first-citizen">
          <div className='border-for-first-citizen'></div>
          <div className='first-citizen-intro'>
            <div className='small-intro'>Introducing </div>
            <div className='all-new-first'>the all new first citizen program</div>
            <div className='new-moment'>Now moments will reward more than points</div>
          </div>
          <div className='first-citizen-pic'><div className='first-citizen-pic-sub'><img src={krish}></img></div></div>
        </div>
    </div>
)
}
export default First_citizen_program;