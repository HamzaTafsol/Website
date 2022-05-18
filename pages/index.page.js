// import HomePage from "./Screens/HomePage";
import LandingPage from "./Screens/LandingPage";

export default function Home(props) {
  return (
    <>
      {/* test */}
      {/* <HomePage />   */}
      <LandingPage/>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      test: true,
    }, // will be passed to the page component as props
  };
}
