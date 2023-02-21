import { useState } from "react";
import styled from "styled-components"

const SearchBoxContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    display:flex;
	max-width:250px;

   > input {
    border: 0;
    padding: 2px 10px;
    font-size: 1rem;
	outline-width:0;
	padding:0.4rem 0.8rem;
    }
`
interface SearchBoxProps {
    onChange :(text:string)=> void;
}

export const SearchBox = ({ onChange }:SearchBoxProps) => {
	const [searchValue, setSearchValue] = useState<string>("");
	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		onChange(e.target.value);
	};

	return (
		<SearchBoxContainer>
			<input
				value={searchValue}
				onChange={onChangeSearchInput}
				placeholder="Filter podcasts..."
			/>
		</SearchBoxContainer>
	);
};
