type nlistProps = {
    rows: number,
    columns: number,
    limit: number
}
type problem = {
    n1: number,
    n2: number,
    default: boolean
}
export default function numlist (props: nlistProps) {
    const length: number = props.rows * props.columns;
    const limit: number = props.limit;
    const holder: problem[] = [];
    for (let i=0; i < length; i++) {
        let n1: number = Math.ceil(Math.random() * limit);
        let n2: number = Math.ceil(Math.random() * limit);
        holder.push({n1: n1, n2: n2, default: Math.round(Math.random()) == 0});
    }
    return holder;
}