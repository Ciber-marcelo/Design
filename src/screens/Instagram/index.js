import './styles.css';

import phone from '../../assets/Instagram-Images/iphone.png';
import logo from '../../assets/Instagram-Images/instagram.png';
import foto from '../../assets/Instagram-Images/foto.png';
import google from '../../assets/Instagram-Images/googlePlay.png';
import store from '../../assets/Instagram-Images/appStore.png';
import tela1 from '../../assets/Instagram-Images/perfil1.png';
import tela2 from '../../assets/Instagram-Images/perfil2.png';
import tela3 from '../../assets/Instagram-Images/perfil3.png';


export default function Instagram() {
   return (
      <div className='background'>
         <div className='container'>
            <div className='wrapper'>
               <div className='phone'>
                  <img src={tela1} className='tela1' alt="tela1" />
                  <img src={tela3} className='tela2' alt="tela2" />
                  <img src={tela2} className='tela3' alt="tela2" />
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
                        <a href='a' className='link-blue'>Alterar contas </a>
                        ou
                        <a href='a' className='link-blue'> Inscreva-se</a>
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

         <div className='footer-instagram'>
            <p>&copy; 2022 Instagram</p>
            <p>Desenvolvido por: 
               <a href='https://www.linkedin.com/in/marcelo-meira-7a5564239/' target="_blanck" className='link-blue'> Marcelones</a>
            </p>
         </div>
      </div>
   );
}

// export default Instagram;
