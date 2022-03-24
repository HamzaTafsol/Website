import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { typoMain } from "../../Components/TypographyMain";
import SpanishFlip from "../../Components/SpanishFlip";
import BestResturants from "../../Components/BestResturants";
import MostPopularInYourCity from "../../Components/MostPopularInYourCity";
import Header from "../../Components/Header";
import TrackOrderWithApp from "../../Components/TrackOrderWithApp";
import Footer from "../../Components/Footer";
import DogtorForBusiness from "../../Components/DogtorForBusiness";
import TeamDogtor from "../../Components/TeamDogtor";
import RiderSafety from "../../Components/RiderSafety";
const HomePage = () => {
  const classes = typoMain();
  const Pet = "/images/pets.svg";
  const Resturant = "/images/resturant.svg";
  const Pharmacy = "/images/pharmacy.svg";
  const Whatever = "/images/whatever.svg";
  const Stores = "/images/stores.svg";
  const BestResturant1 = "/images/best-resturant-1.svg";
  const BestResturant2 = "/images/best-resturant-2.svg";
  const BestResturant3 = "/images/best-resturant-3.svg";
  const BestResturant4 = "/images/best-resturant-4.svg";
  const BestResturant5 = "/images/best-resturant-5.svg";
  const BestStore1 = "/images/best-store-1.svg";
  const BestStore2 = "/images/best-store-2.svg";
  const BestStore3 = "/images/best-store-3.svg";
  const BestStore4 = "/images/best-store-4.svg";
  const BestStore5 = "/images/best-store-5.svg";
  const BestPet1 = "/images/best-pet-1.svg";
  const BestPet2 = "/images/best-pet-2.svg";
  const BestPet3 = "/images/best-pet-3.svg";
  const BestPet4 = "/images/best-pet-4.svg";
  const BestPet5 = "/images/best-pet-5.svg";
  const BestSupermarket1 = "/images/best-supermarket-1.svg";
  const BestSupermarket2 = "/images/best-supermarket-2.svg";
  const BestSupermarket3 = "/images/best-supermarket-3.svg";
  const BestSupermarket4 = "/images/best-supermarket-4.svg";
  const BestSupermarket5 = "/images/best-supermarket-5.svg";
  const BestPharmacy1 = "/images/best-pharmacy-1.svg";
  const BestPharmacy2 = "/images/best-pharmacy-2.svg";
  const BestPharmacy3 = "/images/best-pharmacy-3.svg";
  const BestPharmacy4 = "/images/best-pharmacy-4.svg";
  const BestPharmacy5 = "/images/best-pharmacy-5.svg";
  const Fancy1 = "/images/fancy-1.svg";
  const Fancy2 = "/images/fancy-2.svg";
  const Fancy3 = "/images/fancy-3.svg";
  const Fancy4 = "/images/fancy-4.svg";
  const Fancy5 = "/images/fancy-5.svg";
  const Recommended = "/images/recomendado.svg";
  const Catering = "/images/catering.svg";
  const ExclusiveDogtor = "/images/exclusive-dogtor.svg";
  const FriendBetween = "/images/friends-between.svg";
  const Star = "/images/michellin.svg";
  const Burger = "/images/fast_food.svg";
  const Percent = "/images/percent.svg";
  const WithRecipe = "/images/with-recipe.svg";
  const Babies = "/images/babies.svg";
  const NeedPersonal = "/images/need-personal.svg";
  const LiquorStore = "/images/liquor-store.svg";
  const Shopping2 = "/images/shopping_2.svg";
  const Medicinas = "/images/medicinas.svg";

  const Scheduling = "/images/scheduling.svg";
  const Careg = "/images/careg.svg";
  const Trainedg = "/images/trainedg.svg";
  const Taxi = "/images/taxi.svg";

  const Electronics = "/images/electronics.svg";

  const Ropa = "/images/ropa.svg";
  const Ring = "/images/anillo.svg";
  const SexShop = "/images/sex-shop.svg";
  const Fitness = "/images/fitness.svg";
  const Escolar = "/images/escolar.svg";
  const StarStick = "/images/star-stick.svg";
  const MyVet = "/images/my-vet.svg";

  const Market = "/images/market.svg";
  const Mariachis = "/images/mariachis.svg";
  const Aventra = "/images/aventra.svg";
  const Sorpredeme = "/images/sorprendeme.svg";
  const ChefPersonal = "/images/chef-personal.svg";
  const Genio1 = "/images/genio1.svg";

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));




  const data = [
    {
      title: "Los mejores restaurantes",
      items: [
        { image: BestResturant1, title: "McDonald’s" },
        { image: BestResturant2, title: "Taco Bell" },
        { image: BestResturant3, title: "Sushi Mix" },
        { image: BestResturant4, title: "Ginos" },
        { image: BestResturant5, title: "Aloha Poke" },
      ],
    },
    {
      title: "Los mejores Supermercados",
      items: [
        { image: BestSupermarket1, title: "Carrefour" },
        { image: BestSupermarket2, title: "El corte ingles" },
        { image: BestSupermarket3, title: "Mercadona" },
        { image: BestSupermarket4, title: "Supercor" },
        { image: BestSupermarket5, title: "Lidl" },
      ],
    },
    {
      title: "Las mejores Tiendas",
      items: [
        { image: BestStore1, title: "FNAC" },
        { image: BestStore2, title: "El corte ingles" },
        { image: BestStore3, title: "Inditex" },
        { image: BestStore4, title: "Primark" },
        { image: BestStore5, title: "Mr Wonderful" },
      ],
    },
    {
      title: "Lo mejor en Mascotas",
      items: [
        { image: BestPet1, title: "Cuidadog" },
        { image: BestPet2, title: "Agendog" },
        { image: BestPet3, title: "Deliveredog" },
        { image: BestPet4, title: "MyVET" },
        { image: BestPet5, title: "Rocky Shop" },
      ],
    },
    {
      title: "Las mejores Farmacias",
      items: [
        { image: BestPharmacy1, title: "24 Horas" },
        { image: BestPharmacy2, title: "De turno " },
        { image: BestPharmacy3, title: "Para bebes" },
        { image: BestPharmacy4, title: "Sin recetas" },
        { image: BestPharmacy5, title: "Cuidado personal" },
      ],
    },
    {
      title: "Lo que se te antoje",
      items: [
        { image: Fancy1, title: "Un anillo de boda" },
        { image: Fancy2, title: "Escapada " },
        { image: Fancy3, title: "Un chef personal" },
        { image: Fancy4, title: "Sorprendeme" },
        { image: Fancy5, title: "Experiencias" },
      ],
    },
  ];

  const circleCardsData = [
    {
      image: Resturant,
      title: "Restaurantes",
      data: data[0],
      subCategories: [
        { image: Burger, title: "Restaurantes" },
        { image: Catering, title: "Catering" },
        { image: Percent, title: "Menos de 20" },

        { image: FriendBetween, title: "Entre amigos" },
        { image: ExclusiveDogtor, title: "Exclusivo Dogtor" },
        { image: Recommended, title: "Recomendado" },
        { image: Star, title: "Michellin" },
       
      ],
    },
    {
      image: Stores,
      title: "Tiendas",
      data: data[2],

      subCategories: [
  
        { image: Ropa, title: "Ropa" },
        { image: SexShop, title: "Sex Shop" },
        { image: Electronics, title: "Electronica" },
        { image: Fitness, title: "Fitness" },
        { image: Ring, title: "Joyeria" },
        { image: Escolar, title: "Escolar" },
        { image: StarStick, title: "Magia" },
      ],
    },
    {
      image: Market,
      title: "Market",
      data: data[1],
      subCategories: [
        { image: Market, title: "Mercado" },
        { image: LiquorStore, title: "Licoreria" },
        { image: Shopping2, title: "Bodegas" },
        { image: Percent, title: "Ofertas" },
      ],
    },
    {
      image: Pet,
      title: "Mascotas",
      data: data[3],
      subCategories: [

        { image: Stores, title: "Rocky Shop" },
        { image: Scheduling, title: "Agendog" },
        { image: MyVet, title: "MyVet" },
        { image: Careg, title: "Cuidadog" },
        { image: Trainedg, title: "Entrenadog" },
        { image: Taxi, title: "Deliveredog" },

   
      ],
    },
    {
      image: Pharmacy,
      title: "Farmacia",
      data: data[4],

      subCategories: [
              { image: Babies, title: "Bebes" },
        { image: Medicinas, title: "Medicinas" },
        { image: WithRecipe, title: "Con recipe" },
        { image: NeedPersonal, title: "Necesidad Personal" },
        { image: Percent, title: "Ofertas" },
     
      ],
    },
    {
      image: Whatever,
      title: "Lo que sea",
      data: data[5],
      subCategories: [
      { image: Mariachis, title: "Mariachis" },
        { image: Aventra, title: "Aventura" },
        { image: Sorpredeme, title: "Sorprendeme" },
        { image: ChefPersonal, title: "Chef Personal" },
        { image: Ring, title: "Anillo de Bodas" },
        { image: Genio1, title: "Deseo…" },
      ],
    },
  ];
  const [selectedData, setSelectedData] = React.useState(data[0]);
  const [selectedCategory, setSelectedCategory] = React.useState({});
  const [x, setX] = React.useState(0);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setX(1);
    }, 2000);
  }, []);

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        opacity: x,
      }}
    >
      <Header />

      <SpanishFlip
        circleCardsData={circleCardsData}
        setSelectedData={setSelectedData}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <BestResturants data={selectedData} />
      <MostPopularInYourCity />
      <TrackOrderWithApp />
      <DogtorForBusiness />
      <TeamDogtor />
      <RiderSafety />
      <Footer />
    </Box>
  );
};

export default HomePage;
