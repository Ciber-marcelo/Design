import './styles.css';

import phone from '../../assets/Instagram-Images/iphone.png';
import logo from '../../assets/Instagram-Images/instagram.png';
import foto from '../../assets/Instagram-Images/foto.png';
import google from '../../assets/Instagram-Images/googlePlay.png';
import store from '../../assets/Instagram-Images/appStore.png';


function Instagram() {
   return (
      <div className='container'>
         <div className='wrapper'>
            <div className='phone'>
               <img src={phone} alt="celular" />
            </div>

            <div className='continue'>
               <div className='group'>
                  <img src={logo} className='logo' alt='logo' />
                  <div className='foto'>
                     <img src={foto} className='foto' alt='foto' />
                  </div>
                  <a href='a' className='login'>Continue como marcelones</a>
                  <a href='a' className='logout'>Remover conta</a>
               </div>

               <div className='group'>
                  <p className='not-account'>Não é marcelones ?</p>
                  <p className='not-account'>
                     <span className='link-blue'>Alterar contas </span>
                     ou
                     <span className='link-blue'> Inscreva-se</span>
                  </p>
               </div>

               <div className='get-the-app'>
                  <p>Baixe o aplicativo</p>
                  <div className='downloads'>
                     <img src={google} className='app-download' alt='google' />
                     <img src={store} className='app-download' alt='store' />
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
}

export default Instagram;
