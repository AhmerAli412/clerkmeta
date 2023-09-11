import React, { useEffect, useState } from "react";
import "./App.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInWithMetamaskButton,
  useUser,
  UserButton,
} from "@clerk/clerk-react";

function MetamaskAddressDisplay() {
  const [metamaskAddress, setMetamaskAddress] = useState("");
  const user = useUser();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          if (accounts.length > 0) {
            setMetamaskAddress(accounts[0]);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div>
      <p>Metamask Address: {metamaskAddress}</p>
      <p>Clerk User ID: {user.id}</p>
      <UserButton />
    </div>
  );
}

function App() {
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <MetamaskAddressDisplay />
      </SignedIn>

      <SignedOut>
        <SignInWithMetamaskButton />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;






//******************** second try  ************************


// import React, { useEffect, useState } from "react";
// import "./App.css";
// import {
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
//   SignInWithMetamaskButton,
//   useUser,
//   UserButton,
// } from "@clerk/clerk-react";


// if (!import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

// const clerkPubKey = import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// function MetamaskAddressDisplay() {
//   const [metamaskAddress, setMetamaskAddress] = useState("");
//   const user = useUser();

//   useEffect(() => {
//     if (typeof window.ethereum !== "undefined") {
//       window.ethereum
//         .request({ method: "eth_requestAccounts" })
//         .then((accounts) => {
//           if (accounts.length > 0) {
//             setMetamaskAddress(accounts[0]);
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, []);

//   return (
//     <div>
//       <p>Metamask Address: {metamaskAddress}</p>
//       <p>Clerk User ID: {user.id}</p>
//       <UserButton />
//     </div>
//   );
// }

// function App() {
//   return (
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <SignedIn>
//         <MetamaskAddressDisplay />
//       </SignedIn>

//       <SignedOut>
//         <SignInWithMetamaskButton />
//       </SignedOut>
//     </ClerkProvider>
//   );
// }

// export default App;
