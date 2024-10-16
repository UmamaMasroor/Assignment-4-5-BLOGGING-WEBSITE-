import Card from "./components/card/page"
import Workout from "./components/images/workout.jpg"; 
import Food from "./components/images/food.jpg"
import Web from "./components/images/web dev.jpg"
import Adventure from "./components/images/adventures.jpg"
import Health from "./components/images/Health.jpg"

export default function Home() {
  return (
    <>
    <div className="card-container">
      <Card
       link="/components/blog" />
      <Card 
      image={Workout}
        heading="Effective Workouts for Any Space" 
        text="This is a brief description about Effective Workouts for Any Space" 
        link="/components/blog2" 
      />
      <Card 
         image={Food}
        heading="Recipes and Cultural Insights" 
        text="This is a brief description for Recipes and Cultural Insights" 
        link="/components/blog3" 
      />

<Card 
   image={Web}
        heading="Web Development" 
        text="This is a brief description about modern web development." 
        link="/components/blog4" 
      />

<Card 
   image={Adventure}
        heading="Tips for Affordable Adventures" 
        text="This is a brief description for Tips for Affordable Adventures" 
        link="/components/blog5" 
      />

<Card 
   image={Health}
        heading="Understanding Mental Health" 
        text="This is a brief description for Understanding Mental Health" 
        link="/components/blog6" 
      />
    </div>
    </>
  );
}
