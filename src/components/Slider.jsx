import React, {useState, useEffect, useRef} from "react";

function Slider(props) {

	//Reference to slider container
	const ref = useRef(null);

	//Slider value state
	const [value, setValue] = useState(props.value);
	//Dragging state
	const [dragging, setDragging] = useState(false);

	//Function to move value and calculcate percentage based on mouse position
	function moveValue(mousex) {
		//Get dimensions of slider
		let sliderRect = ref.current.getBoundingClientRect();
		const width = sliderRect.width;
		const left = sliderRect.left;

		let x = mousex - left; //x position within the container.
		let percentage = x*100/width; //0-100 value of slider
		percentage = Math.min(Math.max(percentage, 0), 100); //Clamp percentage between 0-100
		setValue(percentage); //set value
		
		//dispatch event
		props.onChange && props.onChange(percentage);
	};

	//Effect for prop update render
	useEffect(()=>{
		if (value !== props.value) {
			setValue(props.value);
		  }
	}, [props.value])


	/*When dragging this effect attaches global event listeners to window
	for handling the mouse move and mouse up events.
	*/ 
	useEffect(()=>{
		//Drag end handler function
		function handleDragEnd() {
			setDragging(false);
		}

		//Drag move handler function
		function handleDragMove(e) {
			//If mouse is down move slider
			if (dragging) {
				e.preventDefault();
				moveValue(e.clientX);
			}
		};

		//End dragging when mouse is up
		window.addEventListener("mouseup", handleDragEnd);

		//Drag slider when mouse is down
		window.addEventListener("mousemove", handleDragMove);

		return function cleanup() {
			//Cleanup global event listeners on component unmount
			window.removeEventListener("mouseup", handleDragEnd);
			window.removeEventListener("mousemove", handleDragMove);
		}
	}, [dragging]);


	//Drag start handler
	function handleDragStart(e) {
		//Move value once for when just clicking and not dragging
		moveValue(e.clientX);

		//And set dragging true until mouse is up
		setDragging(true);
	}

	return (
		<div ref={ref} className="slider-container" onMouseDown={handleDragStart}>
			<div className="slider-bar">
				<div style={{width:`${value}%`}} className="slider-fill"></div>
				<div style={{left:`${value}%`}} className="slider-handle"></div>
			</div>
		</div>
	)
}

export default Slider;