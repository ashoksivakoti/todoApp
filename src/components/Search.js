import React from 'react';
import { SearchFontIcon, SearchSVGIcon } from "@react-md/material-icons";
import { BiSearchAlt2 } from "react-icons/bi"

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<BiSearchAlt2 className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
