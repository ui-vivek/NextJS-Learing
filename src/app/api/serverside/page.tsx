async function products() {
    console.log("test")
    let data:any = await fetch('https://dummyjson.com/products');
   data = await data.json();
  return data.products;
}
const Serverside = async () =>{
   let product:any = await products();
  return (
    <div>
        <h1>This is page is rendering from Server side.</h1>
      {product.map((item:any,index:number)=>{
            return (
                <>
                    <p  key={index} ><span >{item.title}</span>, Price = <span>{item.price}</span></p>
                </>
            )
        })}
    </div>
  )
}
export  default Serverside

