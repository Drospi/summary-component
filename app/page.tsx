import Score from "@/components/Score";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <div className="bg-white w-full max-w-[375px] sm:max-w-[736px] sm:flex sm:rounded-4x1 shadow-2xl overflow-hidden">
      <Score/>
      <Summary/>

      
    </div>
  );
}
