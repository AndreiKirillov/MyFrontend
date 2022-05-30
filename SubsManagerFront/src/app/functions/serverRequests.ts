
export async function DoRequest(
    url: string,
    method = 'GET',
    body: any = null): Promise<any> 
    {
    const options: any = {
      method: method,
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
    };
    if (body !== null) {
      options.body = body;
    }

    const result = await fetch(url, options);
    if (result.ok) {
      return await result;
    }
    else {
      alert('Request error - ' + url);
      return null;
    }
  }