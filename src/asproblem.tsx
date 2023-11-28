import './asproblem.css';

type p_props = {
    n1: number,
    n2: number,
    default: boolean,
    gArea: string
}

export default function ASProblem(props: p_props){
    const pdef: boolean = props.default;
    const n1: number = pdef ? Math.max(props.n1, props.n2) : Math.min(props.n1, props.n2);
    const n2b: number = pdef ? Math.min(props.n1, props.n2) : Math.max(props.n1, props.n2);
    const n2: number = n1 == n2b && pdef ? n2b - 1 : n1 == n2b && !pdef ? n2b + 1 : n2b;
    const symbol: string = pdef ? '-' : '+';
    const answer: number = pdef ? n1 - n2 : n1 + n2; 
    return (
        <>
            <article className="problem" style={{gridArea: props.gArea}}>
                <p className="n1">{n1}</p>
                <p className="n2">{n2}</p>
                <p className="sym">{symbol}</p>
                <hr className="nl" />
                <p className="answer">{answer}</p>
            </article>
        </>
    )
}