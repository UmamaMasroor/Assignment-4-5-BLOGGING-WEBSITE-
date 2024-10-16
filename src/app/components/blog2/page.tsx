import Image from "next/image";
import Workout from "../images/workout.jpg"
export default function Blog2(){

return(
    <>
    <div className="blog-container">
        <div>
        <Image src={Workout} alt="Workout Image" className="text-focus-in" />
        </div>
        <div>
        <h1 className="text-focus-in ">Effective Workouts for Any Space</h1>
            <p>
            In today’s fast-paced world, finding time and space to exercise can be challenging. Whether you’re at home, traveling, or simply don’t have access to a gym, maintaining your fitness routine is essential for both physical and mental well-being. The good news? You don’t need a lot of space or fancy equipment to get a great workout. Here’s a guide to effective workouts that can be done in any space, helping you stay fit no matter where you are.</p>

<h2><b>Bodyweight Exercises: No Equipment, No Problem</b></h2>
<p>Bodyweight exercises are the cornerstone of effective workouts in small spaces. They require no equipment, making them ideal for any environment, and they target multiple muscle groups at once. Here are some top bodyweight exercises:</p>

<li><b>Squats:</b> </li>

<p>Squats target your legs and glutes, and they can be modified to increase intensity. Try adding a jump at the top for a cardio boost.</p>


<li><b>Push-ups:</b></li>

<p> Push-ups strengthen your chest, shoulders, and arms. If traditional push-ups are too challenging, try them on your knees or against a wall.</p>

<li><b>Planks:</b></li>
<p>Planks engage your core, shoulders, and back. Hold a plank position for as long as you can, or try side planks for variety.
</p>

<h2><b>High-Intensity Interval Training (HIIT): Maximize Efficiency</b></h2>
<p>HIIT workouts are perfect for small spaces because they involve short bursts of intense activity followed by brief rest periods. You can tailor HIIT to fit your space and fitness level, and it’s known for burning calories and improving cardiovascular fitness in a short amount of time. Here’s a simple HIIT routine you can do in under 20 minutes:

</p>

    <li>30 seconds of Jumping Jacks</li>
    <li>30 seconds of Push-ups</li>
    <li>30 seconds of Squats</li>
    <li>30 seconds of Mountain Climbers</li>
    <li>30 seconds of Rest</li>

        </div>
    </div>
    </>
);
}