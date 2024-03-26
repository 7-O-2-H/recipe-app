-- seeds/02_recipes.sql
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (1, 1, 'Pasta', 10, 1, 4, 'Some kind of pasta!');
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (2, 2, 'Cream of Mushroom Soup', 10, 1, 4, 'Like magic, it''s creamy without a lot of cream.');
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (
  3,
  1,
  'Marry Me Chicken', 
  1, 
  2, 
  4, 
  'A flavourful tomato-based chicken dish with fresh basil.'
);
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (
  4, 
  5, 
  'Vavo''s Chicken Soup', 
  35,
  1,
  10,
  'A hearty soup that''s spicy and salty in equal parts.'
);