import Image from "next/image";
import Food from "../images/food.jpg"
export default function Blog(){

return(
    <>
    <div className="blog-container">
        <div>
        <Image src={Food} alt="Food Image" width={900} className="text-focus-in " />
        </div>
        <div>
        <h1 className="text-focus-in ">Recipes and Cultural Insights</h1>
        

<h2><b> Italian Pasta: A Symbol of Simplicity and Tradition</b></h2>
<h3><b>Recipe: Spaghetti Aglio e Olio</b></h3>
<p>This Italian classic requires just a few ingredients—spaghetti, garlic, olive oil, red pepper flakes, and parsley—but it’s full of flavor. The simplicity of Aglio e Olio reflects the Italian philosophy that food should highlight the quality of its ingredients without overcomplication</p>

<h3><b>Ingredients:</b></h3>
<li>400g spaghetti</li>
<li>4 cloves garlic, thinly sliced</li>
<li>½ cup extra virgin olive oil</li>
<li>1 tsp red pepper flakes</li>
<li>Fresh parsley, chopped</li>
<li>Salt to taste</li>
<li>Grated Parmesan (optional)</li>

<h3><b>Instructions:</b></h3>

    <li>Cook the spaghetti in salted boiling water until al dente.</li>
    <li>While the pasta cooks, heat olive oil in a pan over low heat. Add the garlic and red pepper flakes, cooking gently until the garlic is golden.</li>
    <li>Drain the pasta, reserving a cup of the cooking water. Add the spaghetti to the pan, tossing to coat in the oil and garlic. Add a splash of pasta water if needed.</li>
    <li>Serve with fresh parsley and Parmesan if desired</li>

    <h3><b>Cultural Insight:</b></h3>
    <p>
    In Italy, food is a way of bringing people together. Meals are often leisurely, multi-course affairs enjoyed with family and friends. Italian cuisine is built on the principles of regionalism, with different areas boasting their own signature dishes. Spaghetti Aglio e Olio, originating from Naples, showcases how Italians create extraordinary dishes from the simplest ingredients. The focus is always on freshness and the art of balance in flavor.</p>

    <h2><b>Conclusion: More Than Just Recipes</b></h2>
    <p>Each dish from around the world brings with it a piece of history, culture, and tradition. Whether it’s the simplicity of Italian pasta, the rich spices of Indian curry, the precision of Japanese sushi, or the bold flavors of Mexican tacos, these recipes offer more than just delicious meals. They connect us to the people, places, and stories behind the food. Cooking these recipes allows us to experience a small part of these diverse cultures, right from our own kitchens.</p>


        </div>
    </div>
    </>
);
}