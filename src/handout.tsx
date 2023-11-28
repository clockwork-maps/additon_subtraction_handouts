import './handout.css';
import numlist from './numlist';
import { useState, useEffect } from 'react';
import Problems from './problems';
import SVGRange from './range';

type hProps = {
    rows: number,
    columns: number,
    limit: number
}

export default function Handout(props: hProps){
    const rows = props.rows;
    const columns = props.columns;
    const limit = props.limit;
    const nlist = numlist({rows: rows, columns: columns, limit: limit});
    const [data, setData] = useState<{n1: number, n2: number, default: boolean}[]>([]);
    useEffect(()=>{
        setData([...nlist]);
    }, [props]);
    return (
        <>
            <article className="handout">
            <header className="hHeader">
                <input type="text" className="hhInfo" defaultValue="Name: " />
                <input type="text" className="hhInfo" defaultValue="Class: " />
            </header>
            < SVGRange sID="chart1" limit={limit} />
            {data.length == rows * columns ? <Problems rows={rows} columns={columns} numlist={data} answer={false} /> : null}
            </article>
            <article className="handout">
            <header className="hHeader">
                <input type="text" className="hhInfo" defaultValue="Answers" />
            </header>
            < SVGRange sID="chart2" limit={limit} />
            {data.length == rows * columns ? <Problems rows={rows} columns={columns} numlist={data} answer={true} /> : null}
            </article>
        </>
    )
}