// // import { redirect } from "next/navigation"

// export default function ChildRedirection() {
//     // redirect('/redirection') 
//     /*
//     -> Immediate Redirection: The redirect function is called immediately when the component is rendered. 
//     This means that the component will never actually render its JSX content (the <div> with the <h1>), 
//     as the redirection happens before any of that can be displayed.
//     -> User Experience: If a user navigates to this page, they will be immediately redirected without any 
//     indication of what happened. This can be confusing and might not provide a good user experience.
//     -> SEO Concerns: If search engines crawl this page, they might not index it properly due to the immediate 
//     redirection.
//     -> Server-Side vs Client-Side: Depending on where this code is executed (server-side or client-side), 
//     the behavior might differ. For example, server-side redirection might not be what you want if you 
//     intend for the user to see some content before being redirected.
//     */

//     /*
//     // Redirection logic has been moved to the next.config file for centralized management and better control over URL redirects.
//     */
//     return (
//         <div>
//             <h1>Child Page Of Redirection Page.</h1>
//         </div>
//     )
// }


export default function Page() {
  return (
    <div>
      <h1>Hyeeeeeee</h1>
    </div>
  )
}
