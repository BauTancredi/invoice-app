import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";

function App() {
  return (
    <div className="flex">
      <aside
        style={{
          backgroundColor: "lightblue",
          height: "100vh",
          width: "10vw",
        }}
      />
      <div className="w-full flex items-center justify-center">
        <LoginForm />
        {/* <SignUpForm /> */}
      </div>
    </div>
  );
}

export default App;
