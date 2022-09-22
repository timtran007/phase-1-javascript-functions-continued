// code your solution here
function saturdayFun(activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(mondayActivity ="go to the office") {
	return `This Monday, I will ${mondayActivity}.`;
}

function wrapAdjective(specialChar="*"){
    return function(string){
        return `You are ${specialChar}${string}${specialChar}!`
    }
}