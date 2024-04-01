-- Seed steps
-- seed Chicken in Tomato Sauce
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  1, 
  1, 
  1,
  'Prep 1',
  'If using chicken breasts, slice them so you end up  with 6 chicken cutlets. Season all sides of each cutlet with salt and pepper.'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  2, 
  1, 
  2,
  'Prep 2',
  'Scatter the flour on a large plate and coat the cutlets, transferring them to a large plate when finished.'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  3, 
  1, 
  3,
  'Step 1',
  'Heat the oil in a pan over medium-high heat. Once hot, reduce heat and add butter. Add cutlets and cook until golden-brown on all sides (4-5 minutes per side) once butter has melted. Perform this step in batches if necessary and transfer the cutlets to a plate when cooked.'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  4, 
  1, 
  4,
  'Step 2',
  'Reduce heat to low and add the garlic. Stir often until cooked (1 - 3 minutes). Add tomato-paste until color deepens (about 2 minutes).'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  5, 
  1, 
  5,
  'Step 3',
  'Add the cream, heat to a gentle simmer while stirring until it thickens (3 minutes). Stir in parmesian and sun-dried tomatoes. Add more cream if necessary and add seasoning to the sauce. Place the chicken back in the pan to re-heat for 4 to 5 minutes. Remove from heat, scatter the basil on top and serve.'
);
-- seed Gary's Alfredo Farfalle
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  6, 
  2, 
  1,
  'Prep',
  'Place all spices (save parsley) in a small dish and mix. In a seperate container mix together the cream and alfredo mix.'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  7, 
  2, 
  2,
  'Step 1',
  'Start boiling water in a large pot. Add butter in a separate pot and at low - medium heat. Once the butter is melted, add the cream/alfredo mix and all spices whisking regularly until the mixture thickens. Once thickened, remove from heat.'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  8, 
  2, 
  3,
  'Step 2',
  'Add pasta to the pot of water once the water is boiling to let the pasta cook (about 10 minutes). Reheat the alfedo sauce mixture while the pasta continues to cook for about 1 minute. Check that the farfalle; if al dente drain and mix in the alfredo sauce. Sprinkle in parsley, add salt and pepper to taste, remove heat and cover for 3 minutes and serve.'
);
-- seed Vavo's Chicken Noodle Soup
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  9, 
  4, 
  1,
  'Prep',
  'Dice the onions, potatoes and tomatoes; thinly slice the carrots; and chop up the celery (use leafy portions if possible) if needed. Cut the chorizo link into four (4) sections and poke them evenly so heat can get to its center. You may want to measure out the spices, pasta and chop up the chicken at this stage as well.'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  10, 
  4, 
  2,
  'Step 1',
  'Fill a large pot with 8 cups of water, add spices (garlic salt, calda, black pepper, chicken stock base) and butter. Bring to a roiling boil.'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  11, 
  4, 
  3,
  'Step 2',
  'Add vegetables (potatoes, onions, tomato, celery, carrots) and ''poked'' chorizo. Cook at high heat for 10 minutes. Chop up the cooked chicken if you didn''t'' do it earlier.'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  12, 
  4, 
  4,
  'Step 3',
  'Reduce heat to simmer and add the chicken and orzo. Partially cover (or use lid that allows for the escape of steam) and cook for another 10 minutes stirring occasionally.'
);
INSERT INTO steps (id, recipe_id, step_number, step_name, instruction) VALUES (
  13, 
  4, 
  5,
  'Step 4',
  'Turn off the heat and let sit for 5 minutes. You may want to add salt or pepper to taste. Remove the chorizo (deskin it if preferred) and slice the peices into coin shapes and quater them. Add the chopped chorizo back into the soup, sprinkle with parsley and serve.'
);
