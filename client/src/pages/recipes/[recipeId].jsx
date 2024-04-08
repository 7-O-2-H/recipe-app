
// imports
import { useRouter } from 'next/router';
import NavBar from "../../components/NavBar";
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';

export default function RecipePage({ recipe }) {
  const router = useRouter();

  // If the page is not yet generated, display a loading message
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Render the recipe details
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Recipe Name" />
      <Spacer />
    </div>
  );
}