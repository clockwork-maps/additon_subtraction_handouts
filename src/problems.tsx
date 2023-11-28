import ASProblem from "./asproblem";
import './problems.css';

type problem = {
    n1: number,
    n2: number,
    default: boolean
}

type p_props = {
    rows: number,
    columns: number,
    numlist: problem[],
    answer: boolean
}

export default function Problems(props: p_props){
    const holder: React.ReactNode[] = [];
    const rows: number = props.rows;
    const columns: number = props.columns;
    const nlist: problem[] = props.numlist;
    let gAreas: string = '';
    for (let i: number = 0; i < rows * columns; i += columns) {
        let letter: string = String.fromCharCode(97 + (i == 0 ? 0 : i/columns));
        let subG: string = '" ';
        for (let j: number = 0; j < columns; j++) {
            let n: number = i + j;
            // console.log(nlist.length, n);
            let gArea: string = `${letter}${j}`;
            subG += ` ${gArea}`;
            holder.push(<ASProblem n1={nlist[n].n1} n2={nlist[n].n2} default={nlist[n].default} gArea={gArea} />);
            
        }
        subG += '" ';
        gAreas += subG;
    }
    return (
        <>
            <section className="problems" style={{gridTemplateAreas: gAreas}} data-answer={props.answer}>
                {holder}
            </section>
        </>
    )
}