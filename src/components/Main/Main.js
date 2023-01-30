import { useContext } from 'react';
import GlobalContext from '../context/globalContext';
import Tour from '../Tour';

function Main() {
  const { data } = useContext(GlobalContext);



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            {/*  */}
            <div className=" d-flex flex-wrap mx-auto mt-5 p-0">
              {data.map(tour => (
                <Tour tour={tour} key={tour.id} />
              ))}
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
