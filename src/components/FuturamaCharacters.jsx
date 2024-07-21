import { useEffect, useState } from 'react';

export default function App() {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const resp = await fetch('https://api.sampleapis.com/futurama/characters');
            const json = await resp.json();
            setData(json);
        } catch (err) {
            setData(err.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                <h1>Futurama Characters</h1>
            </div>
            <div className='container'>
                <div className='row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {data.map((item, index) => {
                        return (
                            <div className="card" style={{ width: "18rem;" }}>
                                <img src={item.images.main} className="card-img-top" alt="..." style={{ height: '100px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name.first} {item.name.middle} {item.name.last}</h5>
                                    <p className="card-text">{item.age}</p>
                                    <p className="card-text">{item.gender}</p>
                                    <p className="card-text">{item.species}</p>
                                    <p className="card-text">{item.occupation}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}