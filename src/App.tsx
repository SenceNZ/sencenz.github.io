function App() {
  return (
    <div className="bg-gradient-to-b from-cyan-50 via-cyan-100 to-cyan-500">
      <div className="container mx-auto h-screen p-8">
        <img className="w-64" src="/logo_w_text.png" />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-4 lg:gap-y-0">
          <div className="p-6">
            <div className="text-slate-700 text-5xl font-semibold mb-8">
              AI-Powered Insights for Content Creators
            </div>
            <div className="text-xl text-slate-700 font-semibold mb-8">
              Revolutionise your content creation with our AI-powered analytics
              tool. Engage with your audience like never before. Coming soon.
            </div>
            <a
              className="text-xl text-slate-700 font-semibold"
              href="mailto:hello@chatrlyst.com"
            >
              <span className="text-4xl">📧</span> hello@chatrlyst.com
            </a>
          </div>
          <div>
            <img
              className="mx-auto rounded-3xl w-3/4"
              src="/blurred_dashboard.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
