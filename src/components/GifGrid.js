import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {


    const {data:images , loading} = useFetchGifs(category);

    //const [images, setImages] = useState([]);

    return (
    <>
        <h3>{category}</h3>
        
        <div className='card-grid'>
            {loading && <p>Loading...</p>}
                {
                    images.map( (img) =>{
                        return <GifGridItem
                            key={img.id} 
                            { ...img }
                        />
                    })
                }
        </div>
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
