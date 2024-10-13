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
      <Card/>
      <Card 
      image={Workout}
        heading="Effective Workouts for Any Space" 
        text="This is a brief description for the second card about modern web development." 
        link="/components/blog2" 
      />
      <Card 
         image={Food}
        heading="Recipes and Cultural Insights" 
        text="This is a brief description for the second card about modern web development." 
        link="/components/blog2" 
      />

<Card 
   image={Web}
        heading="Web Development" 
        text="This is a brief description for the second card about modern web development." 
        link="/components/blog2" 
      />

<Card 
   image={Adventure}
        heading="Tips for Affordable Adventures" 
        text="This is a brief description for the second card about modern web development." 
        link="/components/blog2" 
      />

<Card 
   image={Health}
        heading="Understanding Mental Health" 
        text="Breaking the Stigma: Understanding Mental Health" 
        link="/components/blog2" 
      />
    </div>
    </>
  );
}
