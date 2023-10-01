import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

function App() {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  const country = timeZone.includes("Pacific")
    ? "Aotearoa"
    : "Aotearoa (New Zealand)";

  return (
    <div className="bg-fixed bg-gradient-to-b from-cyan-50 via-cyan-100 to-cyan-300 text-slate-700">
      <div className="container mx-auto min-h-screen px-8 py-12">
        <img className="w-80" src="/logo_w_text.png" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0">
          <div className="p-6 lg:mt-4 lg:mr-4">
            <div className="text-5xl font-semibold mb-8">
              <p>
                Meet <span className="text-cyan-500">Chatrlyst</span>.
              </p>
              <span className="text-cyan-500">AI-Powered</span> Insights for
              Content Creators.
            </div>
            <div className="text-xl font-semibold mb-8 lg:mb-16">
              Engage with your audience like never before. Revolutionise your
              content creation with our AI-powered analytics tool. Coming soon.
            </div>
            <div className="text-xl text-white bg-cyan-500 rounded-full pl-4 pr-3 py-2.5 w-fit mb-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSehYzi8HmT2OrheJ4aoD3dg8ZFawyuLR9uhYVs-yO3dd6QAjA/viewform"
                target="_blank"
              >
                <span className="align-bottom mr-1">Join the waitlist</span>
                <ArrowRightCircleIcon className="w-7 inline-block align-bottom" />
              </a>
            </div>
            <div className="text-xl bg-white text-cyan-500 rounded-full pl-4 pr-3 py-2.5 w-fit">
              <a href="https://dev.chatrlyst.com">
                <span className="align-bottom mr-1">
                  Have early access? Log in here
                </span>
                <ArrowRightCircleIcon className="w-7 inline-block align-bottom" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="md:basis-[calc(50%-1.5rem)] rounded-xl drop-shadow-xl bg-white">
              <img src="/chart_1.png" />
            </div>
            <div className="md:basis-[calc(50%-1.5rem)] rounded-xl drop-shadow-xl bg-white">
              <img src="/chart_2.png" />
            </div>
            <div className="md:basis-[calc(50%-1.5rem)] rounded-xl drop-shadow-xl bg-white">
              <img src="/chart_3.png" />
            </div>
          </div>
        </div>
        <div className="sticky mt-12 top-[100vh] flex flex-col items-center justify-center py-3">
          <div>made with 🖤 in {country}</div>
          <div className="text-xs text-slate-500">
            Copyright ©️ 2023 Chatrlyst All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
