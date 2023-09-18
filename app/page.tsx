import { BorderBox } from "@/app/component/common/Box";
import Profile from "./component/main/profile/page";
import ScrollToTopBtn from "./component/ScrollToTopBtn";
import NavigationBar from "./component/NavigationBar";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <div>
        <BorderBox boxStyle="square">BorderBox</BorderBox>
        <Profile />
      </div>
      <ScrollToTopBtn />
    </main>
  );
}
