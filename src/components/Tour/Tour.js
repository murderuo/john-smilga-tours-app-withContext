import { useContext, useState } from 'react';
import GlobalContext from '../context/globalContext';

function Tour({ tour }) {
  const { basket, setBasket, data, setData } = useContext(GlobalContext);
  const [more, setMore] = useState(false);

  // useEffect(() => {
  //   console.log('basket changed');
  // }, [basket]); //1. yol kullanıldığında çalışmıyor ,2.yolda da kullanmamıza gerek yok

  const handleNotInterested = id => {
    const newToursData = data.filter(item => (item.id !== id ? item : null));
    setData(newToursData);
  };

  return (
    <>
      <div className=" col-xl-4 col-lg-6  col-sm-12">
        <div className="d-flex flex-column position-relative m-1 border rounded">
          <img className="c-img rounded " src={tour.image} alt="" />
          <span className="position-absolute bg-light tour-price fw-bold">
            $ {tour.price}
          </span>
          <div className="d-flex flex-column py-2 px-4">
            <h5 className="c-title py-3">{tour.name}</h5>
            <p className="c-text h-100 align-self-center">
              {more ? tour.info : tour.info.substring(0, 150)}
            </p>
            <div className=" d-flex ">
              <button
                className="btn btn-outline-dark me-auto "
                onClick={() => setMore(!more)}
              >
                {more ? 'Read Less' : 'Read More'}
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleNotInterested(tour.id)}
              >
                Not interested
              </button>
              <button
                className={`btn ms-auto ${
                  basket.includes(tour) ? 'btn-danger' : 'btn-outline-success'
                }`} //btn-outline-success
                onClick={() => setBasket([...basket, tour])}
                disabled={basket.includes(tour)}
              >
                {basket.includes(tour) ? 'In Basket' : 'Add Basket'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tour;
