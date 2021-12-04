//Get details of Any perticular user

//1. userName ( argument )

//2. api call to github

async function getData(user){

try{

    let res = await fetch(`https://api.github.com/users/${user}`)

    let data = await res.json();

    return data;

}
catch(error){
    console.log(error);
}
}

export default getData;