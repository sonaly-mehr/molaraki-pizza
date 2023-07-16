import React from "react";
import Items from "./Items";

const Pizza = () => {
  const items = [
    {
      id: 1,
      name: "MARGARITA",
      price: "€9.50",
      descption:
        "Με φρέσκια ντομάτα, σάλτσα ντομάτας, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "With fresh tomato, tomato sauce, yellow cheese and mozzarella",
    },
    {
      id: 2,
      name: "BACON",
      price: "€11.00",
      descption:
        "Με μπέικον, φρέσκια ντομάτα, σάλτσα ντομάτας, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "ith bacon fresh tomato, tomato sauce, yellow cheese and mozzarella",
    },
    {
      id: 3,
      name: "SPECIAL",
      price: "€12.00",
      descption:
        "Με μπέικον, ζαμπόν, μανιτάρια, πράσινη πιπεριά, φρέσκια ντομάτα, σάλτσα ντομάτας, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "With bacon, ham, mushrooms, peppers, fresh tomato, tomato sauce, yellow cheese and mozzarella",
    },
    {
      id: 4,
      name: "CHICKEN",
      price: "€11.00",
      descption:
        "Με φιλέτο κοτόπουλο, καπνιστή γαλοπούλα, μανιτάρια, πιπεριά, φρέσκια ντομάτα, σάλτσα ντομάτας, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "With smoked turkey, chicken breast, mushrooms, peppers, fresh tomato, tomato sauce, yellow cheese and mozzarella",
    },
    {
      id: 5,
      name: "FUNGHI",
      price: "€12.50",
      descption:
        "Με λάδι τρούφας, ποικιλία μανιταριών, σάλτσα ντομάτας, τοματίνια, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "With truffle oil, mushrooms, fresh cherry tomatoes, tomato sauce, yellow cheese and mozzarella",
    },
    {
      id: 6,
      name: "PARMA",
      price: "€13.50",
      descption:
        "Με προσούτο, baby ρόκα, τοματίνια, μοτσαρέλα bufala, σάλτσα ντομάτας, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "With prosciutto, baby arugula, mozzarella bufala, cherry tomato, tomato sauce, yellow cheese and grated mozzarella",
    },
    {
      id: 7,
      name: "PEPERONI",
      price: "€11.00",
      descption:
        "Με καυτερό σαλάμι πεπερόνι, φρέσκια ντομάτα, σάλτσα ντομάτας, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "With fresh tomato, tomato sauce, yellow cheese and mozzarella",
    },
    {
      id: 8,
      name: "QUATTRO FORMAGGI",
      price: "€10.00",
      descption: "Με τέσσερα τυρά και σάλτσα ντομάτας",
      descptionEng: "With tomato sauce and four cheeses",
    },
    {
      id: 9,
      name: "CAPRESE",
      price: "€12.00",
      descption:
        "Με φρέσκια ντομάτα, σάλτσα ντομάτας, μοτσαρέλα bufala και φύλλα φρέσκου βασιλικού",
      descptionEng:
        "With fresh tomato, tomato sauce, mozzarella bufala and fresh basil leaves",
    },
    {
      id: 10,
      name: "SALMON",
      price: "€13.00",
      descption:
        "Με καπνιστό σολομό, baby σπανάκι, τοματίνια, σάλτσα ντομάτας και μοτσαρέλα",
      descptionEng:
        "With smoked salmon, baby spinach, cherry tomato, tomato sauce and mozzarella",
    },
    {
      id: 11,
      name: "MOLARAKI",
      price: "€13.00",
      descption:
        "Με λουκάνικο Μυκόνου, κρεμμύδι, φρέσκια ντομάτα, σάλτσα ντομάτας, baby ρόκα, γραβιέρα και μοτσαρέλα",
      descptionEng:
        "With mykonian sausage, onion, fresh tomatoes, sauce of tomatoes, baby arugula, graviera and mozzarella",
    },
    {
      id: 12,
      name: "BBQ “BURGER”",
      price: "€15.00",
      descption:
        "Με μπιφτέκι μόσχου σε σκεπαστή pizza, μπέικον, καπνιστή BBQ σάλτσα, cheddar, καραμελωμένα κρεμμύδια,",
      descptionEng:
        "σάλτσα ντομάτας, κίτρινο τυρί και μοτσαρέλα (έξτρα τηγανιτό αυγό 1€) Beef burger in a covered pizza with bacon, smoked BBQ sauce, cheddar, caramelized onions, tomato sauce, yellow cheese and mozzarella (extra fried egg €1)",
    },
    {
      id: 13,
      name: "“PEINERLI GRANDE” HOT DOG",
      price: "€13.50",
      descption:
        "Με coleslaw, λουκάνικο, κέτσαπ, μουστάρδα, σάλτσα ντομάτας, διάφορα κίτρινα τυριά και μοτσαρέλα (έξτρα τηγανιτό αυγό 1€)",
      descptionEng:
        "With coleslaw, sausage, ketchup, English mustard and yellow cheese (extra fried egg 1€)",
    },
    {
      id: 14,
      name: "“PEINERLI GRANDE” BOLOGNESE",
      price: "€13.50",
      descption:
        "Με φρέσκο μοσχαρίσιο κιμά, σάλτσα τομάτας, κίτρινο τυρί και μοτσαρέλα (έξτρα τηγανητό αυγό 1€)",
      descptionEng:
        "With fresh minced beef, yellow cheese and mozzarella (extra fried egg 1€)",
    },
    {
      id: 15,
      name: "BIANCA",
      price: "€13.50",
      descption:
        "Με κοτόπουλο, κάρυ, ανανά, bianca sauce, καραμελωμένα κρεμμύδια, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "With chicken, curry, pineapple, bianca sauce, yellow cheese and mozzarella",
    },

    {
      id: 16,
      name: "“PEINERLI GRANDE” HOT DOG",
      price: "€13.50",
      descption:
        "Με coleslaw, λουκάνικο, κέτσαπ, μουστάρδα, σάλτσα ντομάτας, διάφορα κίτρινα τυριά και μοτσαρέλα (έξτρα τηγανιτό αυγό 1€)",
      descptionEng:
        "With coleslaw, sausage, ketchup, English mustard and yellow cheese (extra fried egg 1€)",
    },
    {
      id: 17,
      name: "“PEINERLI GRANDE” BOLOGNESE",
      price: "€13.00",
      descption:
        "Με φρέσκο μοσχαρίσιο κιμά, σάλτσα τομάτας, κίτρινο τυρί και μοτσαρέλα (έξτρα τηγανητό αυγό 1€)",
      descptionEng:
        "With fresh minced beef, yellow cheese and mozzarella (extra fried egg 1€)",
    },
    {
      id: 18,
      name: "BIANCA",
      price: "€13.50",
      descption:
        "Με κοτόπουλο, κάρυ, ανανά, bianca sauce, καραμελωμένα κρεμμύδια, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "With chicken, curry, pineapple, bianca sauce, yellow cheese and mozzarella",
    },
    {
      id: 19,
      name: "PASTRAMI",
      price: "€13.50",
      descption:
        "Με παστράμι μόσχου, baby ρόκα, τοματίνια, παρμεζάνα flakes, σάλτσα ντομάτας, κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        "With pastrami, baby arugula, cherry tomato sauce, yellow cheese and mozzarella",
    },
    {
      id: 20,
      name: "GREEK STYLE",
      price: "€13.50",
      descption:
        "Με φρέσκο μοσχαρίσιο κιμά, σάλτσα τομάτας, κίτρινο τυρί και μοτσαρέλα (έξτρα τηγανητό αυγό 1€)",
      descptionEng:
        "With fresh minced beef, yellow cheese and mozzarella (extra fried egg 1€)",
    },

    {
      id: 21,
      name: "VEGETARIAN",
      price: "€12.00",
      descption:
        "Με φρέσκια ντομάτα, κολοκύθι, καρότο, μανιτάρια, πιπεριά, σάλτσα ντομάτας, λάδι βασιλικού κίτρινο τυρί και μοτσαρέλα",
      descptionEng:
        " With fresh tomato, zucchini, carrot, mushrooms peppers, tomato sauce, basil oil, yellow cheese and mozzarella",
    },
    {
      id: 22,
      name: "PHILADELPHIA CHEESE",
      price: "€1.50",
      descption:
        "Με οποιαδήποτε πίτσα της επιλογής σας, προσθέστε γέμιση Philadelphia στο στεφάνι",
      descptionEng:
        "With any pizza of your choice, add Philadelphia filling to the crust",
    },
  ];
  return (
    <>
      <Items data={items} />
    </>
  );
};

export default Pizza;
