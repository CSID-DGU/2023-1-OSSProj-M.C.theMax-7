import React from "react";
import styled from "styled-components";

const SelectBox = (props) => {
	const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};

	return (
		<select onChange={handleChange}>
			{props && props.map((option) => (
				<option
					key={option.value}
					value={option.value}
					defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</select>
	);
};

export default SelectBox;