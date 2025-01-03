import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
            <div className="title">
               <h2><span>Youth</span>Fashions</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li><a href="">Mens</a></li>
                <li><a href="">Womens</a></li>
                <li><a href="">kids</a></li>
                <li><a href="">Beauty</a></li>
            </ul>

        </div>
        <div className="search">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="right">
            <div className="signin">
                <a href="">SignIn</a>
                <a href="">SignUp</a>
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header