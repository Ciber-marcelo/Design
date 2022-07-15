import './styles.css';

import image1 from '../../assets/Flex-Images/0-main.png';
import image2 from '../../assets/Flex-Images/1-quem-somos.png';
import icon1 from '../../assets/Flex-Images/icon-1.png';
import icon2 from '../../assets/Flex-Images/icon-2.png';
import icon3 from '../../assets/Flex-Images/icon-3.png';

function Flex() {
   return (
      <div>
         <div className="container-externo">
            <div className="container1">

               <h1>FlexTurismos</h1>

               <ul className="list-items">
                  <li><a href="#quem-somos">Quem Somos</a></li>
                  <li><a href="#servicos">Serviços</a></li>
                  <li><a href="#planos">Planos</a></li>
               </ul>
            </div>
         </div>

         <div className="container2">
            <div className='title'>
               <h1>Flex <br />Turismos</h1>
               <p>O melhor serviço para você!</p>
               <a href='#saiba-mais' className='button'>Saiba Mais!</a>
            </div>

            <img src={image1} alt="banner de apresentação" />
         </div>

         <div className="container3">
            <div>
               <h2>Quem somos</h2>
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
               <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>

            <img src={image2} alt="balcão de atendimento" />
         </div>

         <div className='container-externo'>
            <div className="container4">

               <h2>Serviços</h2>

               <div className='list-servicos'>
                  <div className='item-servico'>
                     <img src={icon2} alt="hospedagens" />
                     <p>Hospedagens</p>
                     <a href="#comprar-agora" className='button2'>Comprar Agora</a>
                  </div>

                  <div className='item-servico'>
                     <img src={icon1} alt="pacote de viagens" />
                     <p>Pacotes de viagens</p>
                     <a href="#comprar-agora" className='button2'>Comprar Agora</a>
                  </div>

                  <div className='item-servico'>
                     <img src={icon3} alt="roteiros personalizados" />
                     <p>Roteiros personalizados</p>
                     <a href="#comprar-agora" className='button2'>Comprar Agora</a>
                  </div>
               </div>
            </div>
         </div>

         <div className="container5">

            <h2>Planos</h2>

            <div className='list-planos'>
               <div className='item-plano'>
                  <h3>Plano 1</h3>
                  <ul>
                     <li>Suporte 24h</li>
                     <li>Serviços de quarto</li>
                     <li>Guia turístico</li>
                  </ul>
                  <a href="#saiba-mais" className='button'>Saiba Mais!</a>
               </div>

               <div className='item-plano'>
                  <h3>Plano 2</h3>
                  <ul>
                     <li>Suporte 24h</li>
                     <li>Serviços de quarto</li>
                     <li>Guia turístico</li>
                     <li>Roteiro de trilhas</li>
                     <li>Brindes esclusivos</li>
                  </ul>
                  <a href="#saiba-mais" className='button'>Saiba Mais!</a>
               </div>

               <div className='item-plano'>
                  <h3>Plano 3</h3>
                  <ul>
                     <li>Suporte 24h</li>
                     <li>Serviços de quarto</li>
                     <li>Guia turístico</li>
                     <li>Roteiro de trilhas</li>
                     <li>Brindes esclusivos</li>
                     <li>Serviço personalizado</li>
                     <li>Área Vip</li>
                  </ul>
                  <a href="#saiba-mais" className='button'>Saiba Mais!</a>
               </div>
            </div>
         </div>

         <div className='container-externo'>
            <div className='footer'>
               <p>&copy; 2022 CSS Flexbox</p>
               <p>Desenvolvido por: Marcelones</p>
            </div>
         </div>
      </div>
   );
}

export default Flex;
