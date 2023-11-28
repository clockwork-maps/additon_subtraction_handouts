import * as d3 from 'd3';
import { useEffect } from 'react';
import './range.css';

type r_props = {
    limit: number,
    sID: string
}

export default function SVGRange(props: r_props) {
    const limit: number = props.limit;
    const sID: string = props.sID;
    useEffect(()=>{
        let chart: any = d3.select(`#${sID}`);
        chart.node().innerHTML = '';
        let ctbounds = chart.node().getBoundingClientRect();
        let ctln = ctbounds.width;
        let ctht = ctbounds.height;
        let scale = d3.scaleLinear().domain([-1, (limit*2)+1]).range([0, ctln*.85]);
        let axis: any = d3.axisBottom(scale);
        axis.ticks(limit > 210 ? Math.round(limit/25) : limit > 100 ? Math.round(limit/10) : limit >=50 ? limit : limit*2+1);
        axis.tickFormat((x: any) => limit > 750 ? x % 200 == 0 ? x : "" : limit > 500 ? x % 100 == 0 ? x : "" : limit > 210 ? x % 50 == 0 ? x : "" : limit > 100 ? x % 20 == 0 ? x : "" : limit >= 50 ? x % 10 == 0 ? x : "" : x % 5 == 0 ? x : "");
        let bg: any = chart.append('g');
        bg.attr('transform',`translate(${ctln*.075},${ctht*.2})`).classed('bAxis', true);
        bg.call(axis);
    },[props.limit]);
    return(
        <>
            <article className="rHolder">
                <input type="text" className="rhInfo" defaultValue=" Range " />
                <svg id={sID} className='svgRange' />
            </article>
        </>
    )
}