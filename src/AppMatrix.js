import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import AppRouter from "./routes/AppRouter";
import { store } from "./store/store";

export default function AppMatrix() {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
}
