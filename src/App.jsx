function App() {
  return (
    <div className="min-h-screen bg-slate-200 p-10">
      <figure className="max-w-2xl overflow-hidden rounded-md bg-white md:flex">
        <img
          src="/wawa.jpg"
          className="mx-auto mt-6 h-24 w-24 rounded-full object-cover md:mt-0 md:h-auto md:w-48 md:rounded-none"
        />
        <div className="space-y-3 px-8 py-6 text-center md:text-left">
          <blockquote className="font-serif text-lg font-medium italic">
            "Tailwind is my go-to CSS Framework for building web and mobile
            applications. It's easy to customize, make it responsive, and keep
            the code clean when scaling your project."
          </blockquote>
          <figcaption>
            <p className="font-semibold text-blue-400">Wawa Sensei</p>
            <p className="text-gray-500">Your favorite developer on YouTube</p>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default App;
