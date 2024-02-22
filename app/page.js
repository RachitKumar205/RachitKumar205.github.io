import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full w-full bg-bone relative overflow-hidden">
        <div>
            <div className={"absolute top-0 left-0 w-full flex flex-row"}>
                <div className={"w-1/2 items-center justify-center flex text-black"}>
                    <p className={"w-full text-left p-10 text-3xl"}>rachit.kumar@fitframe.live</p>
                </div>
                <div className={"w-1/2 items-center justify-center flex p-10 text-3xl text-black"}>
                    <p className={"w-full text-right"}><span className={"text-5xl"}>F</span>ITFRAME <span className={"text-5xl"}>T</span>ECHNOLOGIES</p>

                </div>
            </div>
            <div className={"justify-center items-center flex flex-col"}>
                <p className={"text-black text-7xl"}>R<span className={"text-5xl"}>ACHIT</span> KUMAR</p>
                <p className={"text-black text-5xl"}>H<span className={"text-3xl"}>EAD OF</span> S<span className={"text-3xl"}>OFTWARE</span></p>
            </div>
            <div className={"absolute bottom-0 left-0 w-full flex flex-row"}>
                <div className={"w-full items-center justify-center flex text-black"}>
                    <p className={"w-full text-center p-10 text-3xl"}>G<span className={"text-xl"}>REATER NOIDA</span>, N<span className={"text-xl"}>ATIONAL CAPITAL REGION</span>, I<span className={"text-xl"}>NDIA</span></p>
                </div>
            </div>
        </div>
    </main>
  );
}
