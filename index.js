
//returns a year the Denver Broncos won the superbowl
//returns undefined if the record has no win objects

function superbowlWin (record){
    const result = record.find
    (record => record.result==="W")
    return !!result ? result.year : undefined

    }
    

    

 