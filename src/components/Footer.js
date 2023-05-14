import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        <div class="footer-content">
          <h3>NavNath Traders</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut non doloremque fuga repellendus possimus iste? Dolores, delectus illum distinctio commodi quo sed ea magni aliquid minima, illo perferendis dolore ut dolorem rem hic soluta temporibus recusandae saepe placeat molestiae assumenda, quam doloremque! In obcaecati voluptatibus cupiditate odio voluptates dolore, quas aliquid quidem et temporibus sequi beatae quam, expedita iste, laboriosam voluptatum! Quasi voluptate aliquam impedit?</p>
          <ul class="socials">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>copyright © <a href="#">NavNath Traders</a>  </p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer