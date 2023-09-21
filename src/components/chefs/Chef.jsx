const Chef = () => {
  return <></>;

import chef1 from '../../assets/images/card-1.jpg'
import chef2 from '../../assets/images/card-2.jpg'
import chef3 from '../../assets/images/card-3.jpg'


const Chef = () => {
    return (
        <>
           <div className="container p-5">
                <h2 className='text-center my-5'>Meet The Chefs</h2>
                <div className="row">

                    <div className="col-4">
                        <img src={chef1} alt="Chef-1" />
                        <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis deleniti et! Illo ipsam, nulla magnam molestiae ratione rem odio.</p>
                    </div>

                    <div className="col-4">
                        <img src={chef2} alt="Chef-2" />
                        <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis deleniti et! Illo ipsam, nulla magnam molestiae ratione rem odio.</p>
                    </div>

                    <div className="col-4">
                        <img src={chef3} alt="Chef-3" />
                        <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis deleniti et! Illo ipsam, nulla magnam molestiae ratione rem odio.</p>
                    </div>
                    
                </div>
           </div>
        </>
            
    );
};

export default Chef;
