

export async function getData(){

    const url="https://fakestoreapi.com/products";
    const res=await fetch(url);

    const data=await res.json();

    console.log(data);

}

