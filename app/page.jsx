import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden"/> 
        <span className="orange_gradient text-center">
          AI-powered prompts
        </span>
      </h1>
      <p className="desc text-center">

      </p>
      <Feed />
    </section>
  )
}

export default Home