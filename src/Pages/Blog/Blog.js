import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4>Answe to the Question NO 1</h4>
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            <h4>Answe to the Question NO 2</h4>
            <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more</p>
            <h5>STYTCH,
                Ory,
                Supabase,
                Okta,
                PingIdentity,
                Keycloak,
                Frontegg,
                Authress,
                Auth0,
                Firebase,
                Amazon Cognito,
                OneLogin   <span className='text-danger'>These can be used instead of firebase</span></h5>
            <h4>Answe to the Question NO 3</h4>
            <p>The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn’t logged in they’re redirected to the /login page, if the user is logged in but aren’t in an authorised role they’re redirected to the home page.</p>
            <h4>Answe to the Question NO 4</h4>
            <p>Node.js uses the “Single Threaded Event Loop” architecture to handle multiple requests at the same time. Do you know Single Threaded Event Loop? Let me explain a little bit.

                Most languages like Java and PHP are multi-threaded. In multi-threaded When multiple clients send the request at the same time each request is assigned to each individual thread it will process all the requests and send back the response to the client.Node.js maintains a limited thread pool to process a request. When request come node js first send those requests to the queue. After the event queue, the next processable entity is the Single Threaded Event Loop. It is the core component of the architecture.

                So, When the request comes from the queue to the event loop it will check whether the request is blocking operation or not.


                If it is a blocking operation then it will send to the thread pool and it will process the request and send back the response to the event loop. These requests are like fetching data from the database.

                If the request is non-blocking then it will process and send the response back. these requests such as I/O polling.
            </p>
        </div>
    );
};

export default Blog;