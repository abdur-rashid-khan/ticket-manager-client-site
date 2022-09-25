import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Overview = () => {
  const [headline, setHeadline] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-08-13&sortBy=publishedAt&apiKey=efaf386aa7f84b52a085b397bafbc7b5', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setHeadline(data))
  }, [user])

  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-slate-700 border">
          <thead style={{ backgroundColor: '#fff' }}>
            <tr>
              <th>Id</th>
              <th>Headline of top news</th>
              <th className='text-center'>Date</th>
              <th className='text-center'>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              headline?.articles?.length===0 ? <Loading></Loading> :
              headline?.articles?.map((t, index) =>
                t.length === 0 ? <p className='text-xl py-4 px-4 text-slate-700 font-serif font-semibold'>No Data Found</p> :
                  <tr key={index}>
                    <th>{index + 1}</th>
                    {
                      t?.title.length > 61 ? <td>{t?.title.slice(0, 60)}...</td> : <td>{t?.title}</td>
                    }

                    <td className='text-center'>{t?.publishedAt.slice(0, 10)}</td>
                    <td className='text-center'>{t?.publishedAt.slice(11, 19)}</td>
                  </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;