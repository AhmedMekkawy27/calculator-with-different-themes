export default function Switch({count, setCount}){
    function handleCounter(){
        setCount(count+1)
        count == 3 && setCount(1)
    }
    return(
        <div className="switch" onClick={handleCounter}>
            <div className="themeNumber absolute bottom-8">
                <span className={`mr-5 ml-3 text-sm num${count}`}>1</span>
                <span className={`mr-5 text-sm num${count}`}>2</span>
                <span className={`text-sm num${count}`}>3</span>
            </div>
            <span className={`slider slider${count}`}></span>
        </div>
    )
}