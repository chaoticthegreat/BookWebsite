function  incrementSearchCount (){
    if(localStorage.getItem("searchCount") != null){
        localStorage.setItem("searchCount",(Number(localStorage.getItem("searchCount")))+1+"")
    }else{
        localStorage.setItem("searchCount",1+"")

    }

}

export function storeGenere(args:any){
    const val = localStorage.getItem("generes");
    let arr: String[] =[]
    if(val!= null){
        arr =JSON.parse(val);
        arr.push(args);
    }else{
        arr.push(args);
    }
    localStorage.setItem("generes",JSON.stringify(arr))
}
export function getHighestFrequencyGenere(){
    let str:string = localStorage.getItem("generes")+"";
    let arr:string[] = JSON.parse(str);
    let freq = 0;
        
        // res to store the most occurring string in the array of
        // strings
        let res = "";
        
        // running nested for loops to find the most occurring
        // word in the array of strings
        let n:number = arr.length;
        for(let i=0;i<n;i++){
            let count = 0;
            for(let j=i+1;j<n;j++){
                if(JSON.stringify(arr[j]) === JSON.stringify(arr[i])){
                    count++;
                }
            }
            
            // updating our max freq of occurred string in the
              // array of strings
            if(count>=freq){
                res = arr[i];
                freq = count;
            }
        }
        
        console.log("The word that occurs most is : " + res + "<br>");
        console.log("No of times: " + freq);
        return res
    }
