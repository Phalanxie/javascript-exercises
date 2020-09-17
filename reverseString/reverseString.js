function reverseString(exa) 
{
    let holdWord = [];
    let result = exa.split(" ");
    if(exa == "")
    {
        return "";
    }
    else if(exa != "" && exa.split(" ").length < 2)
    {
        for(let a = exa.length - 1; a != -1; a--)
        {
            holdWord += exa.charAt(a);
        }
        return holdWord;
    }
    
    else if(exa != "" && exa.split(" ").length >= 2)
    {
        result = exa.split(" ");
        let holdSentence = [];
        let wordVar = [];
        let holdWord = [];
        let printWord = "";
        for(let i = 0; i < (result.length); i++)
        { //To split string into separate words
           wordVar[i] = result[i];
          holdSentence[i] = "";
            for(let a = wordVar[i].length; a > -1; a--)
            {//word reverser
              holdSentence[i] += wordVar[i].charAt(a);
            }
        }
            for(let b = holdSentence.length - 1; b > 0; b--)
            {
                printWord += holdSentence[b].toString() + " ";
            }
            printWord += holdSentence[0];
            return printWord;
        
        //splitter();

    }
    else
    {
        return 0;

    }
}



module.exports = reverseString
