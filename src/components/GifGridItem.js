import React from 'react'

const GifGridItem = ({ id, title, url}) => {
  return (
    <div className='col-4 mb-2'>
        <div className="card">
            <img src={ url } alt={ title } title={ title } className="card-img-top" />
            <div className='card-body'>
                <p className='card-text'>{ title }</p>
            </div>
        </div>
    </div>
  )
}

export default GifGridItem