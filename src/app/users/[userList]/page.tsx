// "use client"
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
export async function generateStaticParams() {
    const userList = getUsersLists();
    const users = await userList;
    return users.map((user: any) => ({ params: { userId: user.id.toString() } }));
}