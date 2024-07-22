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
            <div className="p-3 bg-secondary text-white border border-primary-subtle rounded-3">
                <h1>Futurama Characters</h1>
            </div>
            <div className='container'>
                <div className='row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {data.map((item, index) => {
                        return (
                            <div className="card bg-primary-subtle text-primary-emphasis border border-light" style={{ width: "18rem;" }}>
                                <img src={item.images.main} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name.first} {item.name.middle} {item.name.last}</h5>
                                    <p className="card-text">Age: {item.age}</p>
                                    <p className="card-text">Gender: {item.gender}</p>
                                    <p className="card-text">Species: {item.species}</p>
                                    <p className="card-text">Occupation:  {item.occupation}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}