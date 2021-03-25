import React, {useEffect, useState} from 'react';

function Game(){
    const [count, setCount] = useState(0);
    const [clap, setClap] = useState('');

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const divideTen = (num) => {
        let cnt = 0;
    
        while (num > 0) {
            let remain = num % 10;
            
            num = Math.floor(num / 10);

            if (remain > 0 && remain % 3 == 0) {
                cnt = cnt + 1;
            }
        }
        //console.log(cnt);

        return cnt;
    }

    useEffect(() => {
        const num = count;
        let cnt = divideTen(num);
        
        console.log(cnt);

        if (cnt == 0) {
            setClap('');
        }
        else {
            setClap('짝'.repeat(cnt));
        }
    })


    return (
        <div>
            <h1> Count : {count} </h1>
            <h1> 짝 : {clap} </h1>
            <button onClick={increment}> +1 </button>
            <button onClick={decrement}> -1 </button>

            <button onClick={reset}> 0 </button>
        </div>
    )
}

export default Game;