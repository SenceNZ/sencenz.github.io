function App() {
  return (
    <div className="bg-gradient-to-b from-cyan-50 via-cyan-100 to-cyan-200 text-slate-700">
      <div className="container mx-auto min-h-screen px-8 py-12">
        <img className="w-80" src="/logo_w_text.png" />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-4 lg:gap-y-0">
          <div className="p-6">
            <div className="text-5xl font-semibold mb-8">
              <p>
                Meet <span className="text-cyan-500">Chatrlyst</span>.
              </p>
              <span className="text-cyan-500">AI-Powered</span> Insights for
              Content Creators.
            </div>
            <div className="text-xl font-semibold mb-8">
              Engage with your audience like never before. Revolutionise your
              content creation with our AI-powered analytics tool. Coming soon.
            </div>
            <a
              className="text-xl font-semibold"
              href="mailto:hello@chatrlyst.com"
            >
              <span className="text-4xl">📧</span> hello@chatrlyst.com
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <img
              className="w-72 rounded-3xl drop-shadow-xl bg-white"
              src="/chart_1.png"
            />
            <img
              className="w-72 rounded-3xl drop-shadow-xl bg-white"
              src="/chart_2.png"
            />
            <img
              className="w-72 rounded-3xl drop-shadow-xl bg-white col-span-2"
              src="/chart_3.png"
            />
          </div>
        </div>
        <div className="sticky mt-12 top-[100vh] flex justify-center">
          <div>Made with 🖤 in Aotearoa</div>
        </div>
      </div>
    </div>
  );
}

export default App;
