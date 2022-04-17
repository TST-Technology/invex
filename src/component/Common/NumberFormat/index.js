export default function abbreviateNumber(value) {
    if(value > 0){
        return (
            <span className="plus">
                {
                    Math.abs(Number(value)) >= 1.0e+9

                    ? (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + "B"
                    // Six Zeroes for Millions 
                    : Math.abs(Number(value)) >= 1.0e+6

                    ? (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + "M"
                    // Three Zeroes for Thousands
                    : Math.abs(Number(value)) >= 1.0e+3

                    ? (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + "K"

                    : Math.abs(Number(value))
                }
            </span>
        )
    }
    else if(value < 0){
        return(
            <span className="minus">
                {
                    Math.abs(Number(value)) >= 1.0e+9
                    ? '-' +  
                    (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + "B"
                    // Six Zeroes for Millions 
                    :
                    Math.abs(Number(value)) >= 1.0e+6
                    ?
                    (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + "M"
                    // Three Zeroes for Thousands
                    : '-' + 
                    Math.abs(Number(value)) >= 1.0e+3
                    ?
                    (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + "K"
                    : '-' +  
                    Math.abs(Number(value))
                }
            </span>
        )
    }
    return value
}

export const NormalFormat = (value) =>{
    return Math.abs(Number(value)) >= 1.0e+9

    ? (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(value)) >= 1.0e+6

    ? (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(value)) >= 1.0e+3

    ? (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(value))
}