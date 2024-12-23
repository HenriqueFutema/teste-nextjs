import { SignInCard } from "./components/SignIn/SignInCard/SignInCard";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="w-full flex items-center justify-center">
        <div>
          <SignInCard />
        </div>
      </div>
    </div>
  );
}
