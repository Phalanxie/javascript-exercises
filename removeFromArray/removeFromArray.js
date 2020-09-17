function removeFromArray(array, value1, value2, value3, value4) {
    let containerArray = array;
    let fValue1 = value1;
    let fValue2 = value2;
    let fValue3 = value3;
    let fValue4 = value4;
    //console.log(containerArray);
    //console.log("the first index is " + containerArray[0]);

    for(let i = 0; i < containerArray.length; i++)
    {   
        console.log(containerArray[i]);
        //console.log(containerArray.length);
        if (containerArray[i] === fValue1)
        {
            containerArray.splice(i,1);
            i--;
        }
        else if(containerArray[i] === fValue2)
        {
            containerArray.splice(i,1);
            i--;

        }
        else if(containerArray[i] === fValue3)
        {
            containerArray.splice(i,1);
            i--;

        }
        else if(containerArray[i] === fValue4)
        {
            containerArray.splice(i,1);
            i--;

        }

        //console.log(containerArray);

    }
    console.log("finish:"+containerArray);
    return containerArray;
}

module.exports = removeFromArray
