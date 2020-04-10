import React from 'react'
import styled from 'styled-components'

export default function StyledNav() {
	return (
		<StyledDiv className="Screen">
			<label for="chkMenu" class="menu__button"></label>
			<input type="checkbox" id="chkMenu" />
			<label for="chkMenu" class="menu__helper"></label>
			<nav class="nav__menu">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact</li>
					<li>Support Me</li>
				</ul>
			</nav>
			<main>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio nisi eum excepturi doloribus nesciunt. Maxime laudantium quia et dolor iusto architecto. Laborum minus quam exercitationem voluptate vel animi fuga eius necessitatibus repudiandae, doloribus enim ipsa error tenetur ipsam quae obcaecati facilis distinctio debitis consequuntur unde. Quas fuga eius veritatis nam dolore ipsam, ea nulla eos ullam. Commodi sint nam quos saepe, illum quo pariatur maiores? Sequi totam impedit veritatis. Accusantium, sapiente optio. Nisi blanditiis iusto beatae repellendus molestias quasi dicta ratione iste nemo aliquam. Eligendi officia omnis, expedita possimus, dolor accusantium ab vero voluptas qui excepturi quia provident minima quisquam distinctio asperiores enim porro labore, modi ipsum. Quo, blanditiis? Ullam quidem sequi itaque, commodi non nam? Non reiciendis rem quos voluptatem nulla laborum, dignissimos nemo sint aut consequatur soluta incidunt vero dicta, ex quia nisi! Veniam, illo perferendis corrupti tempore reiciendis eum quae possimus sint. Commodi dolorum voluptates quam! Quam quibusdam modi omnis, similique expedita eum, cumque eos natus consequuntur nihil ipsum reiciendis dolorum repellat quia nobis facilis quasi vero nulla porro. Unde pariatur at quod libero, nemo modi eaque, repudiandae rerum ut repellat vel. Eveniet adipisci sed, natus exercitationem nemo necessitatibus culpa iusto doloribus quidem delectus incidunt, fugit magni. Nemo sapiente accusamus doloremque dolores tempora ducimus quasi excepturi debitis autem sed delectus, rem nesciunt velit provident vel rerum. Consequuntur, dolores dolore culpa deserunt nemo quos magni reprehenderit fugit blanditiis quae assumenda repellendus amet minima, ut tempore quia voluptates atque repudiandae labore, inventore magnam fugiat sed quis! Voluptate laudantium sed blanditiis ut, quasi non. Perferendis fugiat nemo cupiditate, eveniet architecto rerum! Repellendus accusamus, qui commodi natus repudiandae, iure dicta consectetur sequi mollitia esse molestias excepturi asperiores quasi nam totam deleniti reprehenderit tenetur magni placeat soluta veritatis. Temporibus asperiores officia animi repellat doloribus vero! Ut nihil praesentium quasi saepe assumenda!</p>
			</main>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
body{
  background-color:#cecece;
}
.menu__button{
  position: fixed;
    z-index: 1000;
    margin: 1em;
    padding: 0;
    width: 2.5em;
    height: 2.25em;
    border: none;
    text-indent: 2.5em;
    font-size: 1.5em;
    color: transparent;
  cursor:pointer;
    background: transparent;
}
.menu__button:before{
  position: absolute;
    top: 0.5em;
    right: 0.5em;
    bottom: 0.5em;
    left: 0.5em;
    background: linear-gradient(#373a47 20%, transparent 20%, transparent 40%, #373a47 40%, #373a47 60%, transparent 60%, transparent 80%, #373a47 80%);
    content: '';
}
#chkMenu{
  display:none;
}
#chkMenu:checked ~ .nav__menu{
  display:block;
  left:0;
}
#chkMenu:checked ~ .menu__helper{
  display:block;
}
.nav__menu{
  position:fixed;
  left:-300px;
  top:0;
  width:300px;
  height:100%;
  background:#2c3e50;
  transition:all 0.5s ease;
  z-index:1002;
  padding-top:20px;
}
ul{
  list-style:none;
}
ul li{
  margin-bottom:10px;
  color:#fff;
  font-size:20px;
}
.menu__helper{
  z-index:1001;
  position:fixed;
  top:0;
  left:0;
  height:100%;
  width:100%;
  display:none;
}
`
