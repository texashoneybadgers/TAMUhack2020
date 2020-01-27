import React from 'react';

const Slider = () => (
  <div className='slider'>
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-ride='carousel'
    >
      <div className='carousel-inner' role='listbox'>
        <div className='carousel-item active'>
          <img
            className='d-block img-fluid'
            src='https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/05/03-1.jpg'
          />
          <div className='carousel-caption d-none d-md-block'>
            <div className='text'>
              <h3 className='title'>Howdy, Caity!</h3>
              <p className='sub-Title'>Welcome to Vancouver!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Slider;
