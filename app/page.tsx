import { BorderBox } from "@/app/component/common/Box";
import Profile from "./component/main/profile/page";

export default function Home() {
  return (
    <main>
      <div>페이지시작</div>
      <BorderBox boxStyle="square">BorderBox</BorderBox>
      <Profile />
    </main>
  );
}
