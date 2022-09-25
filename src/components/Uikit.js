import React, { useEffect } from "react";
import "../assets/scss/styles.scss";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

const GreenSwitch = styled(Switch)(({ theme }) => ({
	"& .MuiSwitch-switchBase.Mui-checked": {
		color: pink[600],
		"&:hover": {
			backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
		},
	},
	"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
		backgroundColor: pink[600],
	},
}));

const label = { inputProps: { "aria-label": "Switch demo" } };
const Uikit = () => {
	useEffect(() => {
		const gsap = window.gsap;
		let tl = gsap.timeline();
		tl.to(".text", 1, {
			x: 200,
		});
	});
	useEffect(() => {
		let el = document.querySelector(".button-bird");
		let text = document.querySelector(".button-bird__text");
		el.addEventListener("click", function () {
			el.classList.toggle("active");

			if (el.classList.contains("active")) {
				console.log("true");
				text.innerHTML = "DONE";
			} else {
				text.innerHTML = "SEND";
			}
		});
	});
	return (
		<div>
			<FontAwesomeIcon icon={["fas", "angle-right"]} />
			<FontAwesomeIcon icon={["fab", "apple"]} size='lg' />
			<TextField error id='outlined-basic' label='Outlined' variant='outlined' />
			<Switch {...label} defaultChecked color='secondary' />
			<div className='bird-wrapper'>
				<button className='button-bird'>
					<p className='button-bird__text'>SEND</p>
					<svg className='feather' x='0px' y='0px' viewBox='0 0 75 38'>
						<g>
							<path
								d='M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
                      c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
                      c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
                      c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
                      c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z'
							/>
						</g>
					</svg>
					<span className='bird'></span>
					<span className='bird--1'></span>
					<span className='bird--2'></span>
					<span className='bird--3'></span>
					<span className='bird--4'></span>
					<span className='bird--5'></span>
					<span className='bird--6'></span>
					<span className='bird--7'></span>
					<span className='bird--8'></span>
					<span className='bird--9'></span>
					<span className='bird--10'></span>
					<span className='bird--11'></span>
					<span className='bird--12'></span>
					<span className='bird--13'></span>
					<span className='bird--14'></span>
					<span className='bird--15'></span>
					<span className='bird--16'></span>
					<span className='bird--17'></span>
					<span className='bird--18'></span>
					<span className='bird--19'></span>
					<span className='bird--20'></span>
					<span className='bird--21'></span>
					<span className='bird--22'></span>
					<span className='bird--23'></span>
					<span className='bird--24'></span>
					<span className='bird--25'></span>
					<span className='bird--26'></span>
					<span className='bird--27'></span>
					<span className='bird--28'></span>
					<span className='bird--29'></span>
					<span className='bird--30'></span>
				</button>
			</div>
		</div>
	);
};

export default Uikit;
