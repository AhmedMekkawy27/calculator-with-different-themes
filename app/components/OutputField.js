export default function OutputField({output, count}){
    return(
        <>
            <form>
                <input className={`input${count} ${output.length < 12 ? "size-lg": "size-sm"}`} value={output && output} readOnly type="text" />
            </form>
        </>
    )
}