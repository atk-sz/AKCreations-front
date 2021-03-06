import "./App.css";
import { Home } from "./views";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

const App = () => {
  // const dispatch = useDispatch();
  // to check firebase auth state

  // useEffect(() => {
  //   // setInterval(async () => {
  //   //   console.log(await (await KeepAliveServer()).data);
  //   // }, [3000]);
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const idTokenResult = await user.getIdTokenResult();
  //       currentUser(idTokenResult.token)
  //         .then((res) => {
  //           dispatch({
  //             type: "LOGGED_IN_USER",
  //             payload: {
  //               name: res.data.name,
  //               email: res.data.email,
  //               role: res.data.role,
  //               token: idTokenResult.token,
  //               _id: res.data._id,
  //             },
  //           });
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   });

  //   // cleanup
  //   return () => unsubscribe();
  // }, [dispatch]);

  return (
    <Suspense
    // fallback={
    //   <div style={{ position: "fixed", left: "45vw", top: "45vh" }}>
    //     __ PM __
    //   </div>
    // }
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
