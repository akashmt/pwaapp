import React from 'react'
import styled from 'styled-components'
// Source: 

export default function StyledNav10() {
	return (
		<StyledDiv10 className="Screen">
	
  <div id="menu">
    <ul>
      <li><a href="">Lorem.</a></li>
      <li><a href="">Suscipit!</a></li>
      <li><a href="">Sapiente.</a></li>
    </ul>
  </div>

  <div class="button-group">  
    <a class="menu-button" href="#menu">
      <span>
      	<i class="fa fa-bars" aria-hidden="true"></i>
      	<i class="fa fa-times" aria-hidden="true"></i>
      </span>
    </a>
    <a class="menu-button off" href="#off-menu"></a>
  </div>

		</StyledDiv10>
	)
}

const StyledDiv10 = styled.div`

.button-group{
  position: absolute;
  width: 65px;
  height: 65px;
  top: 0;
  left: 300px;
  margin: 8px; /* just to give some space*/
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
}

.menu-button {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  background-color: #000;
  text-align: center;
  color: #fff; 
  border-radius: 50%;
  left: 0;
  top: 0;
  span {
    display: block;
    width: 100%;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @include animation();

    .fa-times {
      display: none;
    }
  }
  /* put this one in background */
  &.off {
    z-index: -1;
  }
}

#menu {
  position: absolute;
  height: 100vh;
  width: 300px;
  margin: 0;
  background-color: #000;
  transform: translateX(0);
  a {
    color:#fff;
    font-family: Cutive Mono;
    text-decoration: none;
  }
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
  
  &:target {
    transform: translateX(-100%);
    +.button-group {
      left: 0;
      /* target the "visible" button */
      .menu-button:first-child {
        span {
          .fa-times {
            display: block;
          }
          .fa-bars {
            display: none;
          }
        }
      }
      	
      /* now put forefront to trigger close */
      .off {
        z-index: 0;
        background-color: transparent;
      }
    }
  }
}

`