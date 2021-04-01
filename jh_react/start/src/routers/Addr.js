import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_KEY = 'devU01TX0FVVEgyMDIxMDMyNTE1MzAwMTExMDk2NDk=';
const URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do	';

function Addr() {
    const [keyword, setKeyword] = useState('');
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);

    const onSearch = (e) => {
        e.preventDefault();
        search();
    }

    const pagePrev = () => {
        if (page > 0) {
            setPage(page - 1);
        }
        console.log(page);
    }

    const pageNext = () => {
        if (page < total) {
            setPage(page + 1);
        };
        console.log(page);
    }

    useEffect(() => {
        console.log(page);
        
        if (keyword === '') {
            return 
        }
        search();
        
    }, [page]);

    const search = () => {
        console.log(page);
        console.log(keyword);
        Axios.get(`${URL}?confmKey=${API_KEY}&currentPage=${page}&counterPerPage=10&resultType=json&keyword=${keyword}`).then(res => {
            const { data : { results : { common : { totalCount}, juso }}} = res;
            setTotal(totalCount || 0);
            setList(juso || []);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <h1> Address Component </h1>
            <form onSubmit={onSearch}>
                <input value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                <button> Search </button>
            </form>
            <button onClick={pagePrev}> Previous </button>
            <button onClick={pageNext}> Next </button>
            <h2>
                {total}개의 검색결과 
            </h2>
            <h2>
                {page} 페이지
            </h2>
            <ul>
                {list.map((item, idx) => (
                    <li key={`ADDRESS${idx}`}> [{item.zipNo}] {item.roadAddrPart1} </li>
                ))}
            </ul>
        </div>
    );
};

export default Addr;
