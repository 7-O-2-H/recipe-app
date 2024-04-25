-- seeds/02_recipes.sql
-- seed Josh
INSERT INTO recipes (user_id, recipe, time, measurement_id, serves, description) VALUES (
  1,
  'Chicken in Tomato Sauce',
  25,
  1, 
  4,
  'A flavourful tomato-based chicken dish with fresh basil.'
);
-- seed Gary
INSERT INTO recipes (user_id, recipe, time, measurement_id, serves, description) VALUES (
  2,
  'Zuppa Toscana',
  35,
  1,
  4,
  'A creamy and hearty Italian Tuscan soup.'
);
INSERT INTO recipes (user_id, recipe, time, measurement_id, serves, description) VALUES (
  2,
  'Alfredo Farfalle',
  20,
  1,
  6,
  'A creamy alfredo pasta.'
);
-- seed Vavo
INSERT INTO recipes (user_id, recipe, time, measurement_id, serves, description) VALUES (
  5,
  'Vavo''s Chicken Soup',
  35,
  1,
  10,
  'A hearty soup that''s spicy and salty in equal parts.'
);
INSERT INTO recipes (user_id, recipe, time, measurement_id, serves, description) VALUES (
  6,
  'Baked Chicken Thighs',
  75,
  1,
  8,
  'Chicken thighs that are crispy on the outside and moist within. This easy to make dish can serve plenty and includes sides!'
);