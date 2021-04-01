import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const API_KEY = 'devU01TX0FVVEgyMDIxMDMxMjExMDIwNDExMDkwNzM=';
const URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';

function Addr() {
	const [keyword, setKeyword] = useState('');
	const [keyword2, setKeyword2] = useState('');
	const [list, setList] = useState([]);
	const [total, setTotal] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	const onSearch = (ev) => {
		ev.preventDefault();
		setKeyword2(keyword);
	};

	const search = () => {
		Axios.get(`${URL}?confmKey=${API_KEY}&currentPage=${currentPage}&CountPerPage=10&resultType=json&keyword=${keyword2}`).then(res => {
			const { data: { results: { common: { totalCount }, juso } } } = res;
			setTotal(totalCount || 0);
			setList(juso || []);
		}).catch(error => {
			console.log(error);
		});
	};

	const next = () => {
		setCurrentPage(prev => prev + 1);
	};

	const prev = () => {
		setCurrentPage(prev => prev - 1);
	};

	useEffect(() => {
		if (keyword2 !== '') {
			if (currentPage !== 1) {
				setCurrentPage(1);
				return;
			}
			search();
		}
	}, [keyword2]);

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [currentPage]);

	return (
		<div>
			<h1>Address Component</h1>
			<form onSubmit={onSearch}>
				<input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
				<button>검색</button>
			</form>
			<h1>검색결과: 총 {total}개의 주소가 검색되었습니다</h1>
			<h1>현재 페이지: {currentPage}</h1>
			<ul>
				{list.map((item, idx) => (
					<li key={`ADDRESS${idx}`}>[{item.zipNo}] {item.roadAddrPart1}</li>
				))}
			</ul>
			{currentPage > 1 && (
				<button onClick={prev}>이전</button>
			)}
			<button onClick={next}>다음</button>
		</div>
	);
}

export default Addr;
