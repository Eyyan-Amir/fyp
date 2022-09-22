import React, {useState} from 'react'

function Banner() {
  const [search, setSearch] = useState("");
  return (
    <div className="banner">
      <div className="banner__image">
        <img src="../assets/banner.jpg" alt="" />
      </div>
      <div className='wrapper'>
        <h2>Find a Job You <span>Love</span></h2>
        <div className='search-bar'>
          <div className='search-field'>
            <input type='text' placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <button className='search-icon'>
              <span title='search'>
                <svg viewBox="0 0 24 24" fill='currentColor'><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g></svg>
              </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
