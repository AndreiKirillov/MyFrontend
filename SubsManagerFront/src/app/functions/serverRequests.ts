
export async function DoRequest(url:string, body: any = null):Promise<any>{

    const result = await fetch(url, body);
    if(result.ok){
        return await result.json;
    }
    else{
        alert('Request error '+ url);
        return null;
    }
}