// "use client"

// Now using the API of Next.js to show the user details
export default async function Page(props: any){
    // let BASE_URL =  process.env.BASE_URL
    const userId = props.params.userList;
    const basePath = process.env.NODE_ENV == "development" ? '/dev' : '/app';
    let response = await fetch(basePath+`/apis/getApi/${userId}`);
    if (!response.ok) {
        console.error(`Failed to fetch user data for ID: ${userId}`);
        return;
    }
    let data = await response.json();
    data = data[0];
    return (
        <>
         <div>
            <h1>Hello,{data.Name}</h1>
            {/* <h5>{data.username}</h5> */}
            <h5>{data.Email}</h5>
            {/* <h5>{data.phone}</h5> */}
            {/* <h5>{data.website}</h5> */}
            {/* <h4>company: {data.company.name}</h4> */}
            {/* <h4>company: {data.company.catchPhrase}</h4> */}
            {/* <h4>company: {data.company.bs}</h4> */}
        </div>
        </>
    )
}
// ===========================================================================================
/**
 * This function is used to generate static pages for each user in the list.
 * It fetches the user list, finds the user based on the URL parameter, and then
 * renders the user's details on the page.
 * 
 * @param props - The props object passed to the component, containing the URL parameters.
 * @returns A JSX element representing the user's details page.
*/

/*
import getUsersLists from "../../../../services/getUsersList"
export default async function Page(props: any) {
    const userId = props.params.userList;
    const userList = getUsersLists();
    const users = await userList;
    console.log(users)
    let user: any;
    await getUsersLists().then((users: any) => {
        user = users.find((user: any) => user.id == userId);
    })
    return (
        <div>
            <h1>Hello</h1>
            <h4>{user.name}</h4>
            <h5>{user.username}</h5>
            <h5>{user.email}</h5>
            <h5>{user.phone}</h5>
            <h5>{user.website}</h5>
            <h4>company: {user.company.name}</h4>
            <h4>company: {user.company.catchPhrase}</h4>
            <h4>company: {user.company.bs}</h4>
        </div>
    )
}
*/
/**
 * This function is used to generate static parameters for the static site generation process.
 * It fetches the list of users and maps each user to an object containing their ID as a string.
 * This allows Next.js to generate static pages for each user.
 * 
 * @returns An array of objects, each containing a user's ID as a string.
 */
/*
export async function generateStaticParams() {
    const userList = getUsersLists();
    const users = await userList;
    return users.map((user: any) => ({ params: { userId: user.id.toString() } }));
}
*/