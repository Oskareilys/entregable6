import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux';
import '../styles/FiltersCategories.css'
import { getHotelsThunk } from '../../store/states/hotels.slice';

const CategoryFilter = () => {

    const url = 'https://hotels-app-7en4.onrender.com/cities'
    const [cities, getCities] = useFetch(url);

    useEffect(() => {
        getCities()
    }, [])

    const dispatch = useDispatch()

    const handleFilterCity = (id) => {
        
        let url

        if (id) {
            url = `https://hotels-app-7en4.onrender.com/hotels?cityId=${id}`
        } else{
            url = 'https://hotels-app-7en4.onrender.com/hotels'
        }
        dispatch(getHotelsThunk(url))
    }

  return (
    <div className='other__filters'>
        <div className='city__others'>
            <section className='cities__filt-container'>
                <div className='city__name-container'>
                    <h3 className='city__name'>Filter City</h3>
                </div>
                <div className='cities__items-total' onClick={() => handleFilterCity()}> All Cities</div>
                <ul className='cities__filt-list'>
                    {
                        cities?.map(city => (
                            <li className='cities__items' onClick={() => handleFilterCity(city.id)} key={city.id}>{city.name}</li>
                        ))
                    }
                </ul>
            </section>
    </div>
    </div>
  )
}

export default CategoryFilter