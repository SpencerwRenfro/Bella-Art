import React, {useState, useRef} from 'react'
import Modal from './Modal'
import Doom from './Doomux.webp'
import Veng from './Vengir_Skull.png'

function Kitchens(props) {
  let lightFixtures = `${process.env.PUBLIC_URL}/images/lightFixtures.jpg`;
  var emptyImagePath;
  var baseURL = `${process.env.PUBLIC_URL}/images/`

  let tvMount = 'TVMounts/Doomux.webp'
  let lights =  `lightFixtures.jpg`

  const image = useRef();
  const [Image, SetImage] = useState(0);

  const [emptyImage, setEmptyImage] = useState('');

  const card = (<div className="card w-96 bg-base-100 shadow-xl">
  <figure>
    <img className="pt-2" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>);






  return (
    <Modal>
      <div className=''>
        <div className='flex justify-end'>
          <button className='btn btn-primary' onClick={props.closeModal}>Close</button>
        </div>
        {/* {
          props.tvMount ? image.current = Veng :  image.current = Doom


        } */}
        {
          props.tvModal ? SetImage(a => a + 1) : console.log('tvModal/Kitchen not ture')
        }

        {/* SetImage(`${process.env.PUBLIC_URL}/images/TVMounts/Doomux.webp`)  */}

        {/* {console.log(image.current)} */}
        <img src={Veng}/>
        <div  className='pt-10 grid grid-cols-12 gap-9 overflow-auto'>
          <div className='col-span-12 lg:col-span-8'>
            {card}
            {card}
            {card}

          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Kitchens