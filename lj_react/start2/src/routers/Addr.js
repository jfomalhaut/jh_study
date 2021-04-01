import React, { useState } from 'react';
import Axios from 'axios';

const API_KEY = 'devU01TX0FVVEgyMDIxMDMxMjExMDIwNDExMDkwNzM=';
const URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';

function Addr() {
	const [keyword, setKeyword] = useState('');
	const [list, setList] = useState([]);
	const [total, setTotal] = useState(0);

	const onSearch = (ev) => {
		ev.preventDefault();
		search();
	};

	const search = () => {
		Axios.get(`${URL}?confmKey=${API_KEY}&currentPage=1&CountPerPage=10&resultType=json&keyword=${keyword}`).then(res => {
			const { data: { results: { common: { totalCount }, juso } } } = res;
			setTotal(totalCount || 0);
			setList(juso || []);
		}).catch(error => {
			console.log(error);
		});
	};

	return (
		<div>
			<h1>Address Component</h1>
			<form onSubmit={onSearch}>
				<input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
				<button>검색</button>
			</form>
			<h1>검색결과: 총 {total}개의 주소가 검색되었습니다</h1>
			<ul>
				{list.map((item, idx) => (
					<li key={`ADDRESS${idx}`}>[{item.zipNo}] {item.roadAddrPart1}</li>
				))}
			</ul>
		</div>
	);
}

export default Addr;
