export default function OutputField({output, count}){
    return(
        <>
            <form>
                <input className={`input${count}`} value={output && output} type="text" />
            </form>
        </>
    )
}