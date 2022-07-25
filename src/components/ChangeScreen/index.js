import './styles.css';
import { Link } from "react-router-dom";
import Arrow from "../../assets/ChangeScreen-Images/arrow.png"

export default function ChangeScreen() {
   return (
      <div className='container-changeScreen'>
         <div className='element-changeScreen'>
            <Link to="/" className='text-changeScreen'> Flex </Link>
         </div>

         <div className='element-changeScreen'>
            <Link to="/instagram" className='text-changeScreen'> Instagram </Link>
         </div>

         <div className='button-changeScreen'>
            <img src={Arrow} className='seta-changeScreen' alt="seta" />
         </div>
      </div>
   );
}



