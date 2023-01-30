import { useContext, useState } from 'react';
import { BsBasket } from 'react-icons/bs';
import GlobalContext from '../context/globalContext';

function Header() {
  const { basket, setBasket } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);

  const handleTourDel = id => {
    //sepetten silme işlemi 1. yol, burada silinen item, Tour komponenti render etmediği için
    //In Basket Butonu Add basket butonuna dönüşmüyor. Tour komponentini render edebilmek için
    // basket state ini kontrol etmek gerektiğini düşündüm.bu yolla yapıp Tour de basket state i
    // kontrol etsem bile buton dönüşümü olmadı

    // basket.forEach((item, index) => {
    //   if (item.id === id) {
    //     basket.splice(index, 1);
    //   }
    // });

    //2.yol basketi yeniden setlediğim için tour componenti de render oldu, içinde effect kullanmadan.
    const newBasketItems = basket.filter(item => {
      if (item.id !== id) {
        return item;
      }
      return null;
    });
    setBasket(newBasketItems);
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-primary bg-primary ">
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <span className="navbar-brand justify-content-center text-light fs-3 fw-bolder">
            Tours App
          </span>
        </div>
        <div className="navbar-brand">
          <div
            className=" d-flex align-items-center position-relative"
            onClick={() => setModal(!modal)}
          >
            <span className="me-3 text-light">Basket</span>
            <BsBasket className="text-light" />
            <span className="text-light ms-2">{basket.length}</span>
            {modal && (
              <div className="position-absolute border basket">
                <div className="d-flex flex-column">
                  {basket.map(item => (
                    <div
                      className="d-flex align-items-center flex-wrap p-2"
                      key={item.id}
                    >
                      <img src={item.image} className="rounded" alt="" />
                      <div className=" ms-1">{item.name}</div>
                      <div className="ms-auto d-flex align-items-center">
                        <span>${item.price}</span>
                        <button
                          className="ms-1 btn btn-danger"
                          onClick={() => handleTourDel(item.id)}
                        >
                          Del
                        </button>
                      </div>
                    </div>
                  ))}
                  {
                    <>
                      <div className="d-flex align-items-center justify-content-evenly flex-wrap border-top">
                        <div className=" ms-1 fw-bold">Total</div>
                        <div className="fs-6 fw-bolder">
                          $
                          {basket.reduce((acc, item) => {
                            const newPrice = item.price.replace(',', '');
                            const total = parseFloat(newPrice) + acc;
                            return total;
                          }, 0)}
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
