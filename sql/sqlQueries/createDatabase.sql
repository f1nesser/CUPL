CREATE TYPE gender_type as ENUM ('male', 'female');
CREATE TYPE user_type as ENUM ('admin', 'user');
CREATE TYPE lift_type as ENUM ('bench', 'squat', 'deadlift');
CREATE TYPE club_role_type as ENUM ('active', 'inactive')
CREATE TABLE IF NOT EXISTS Member(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  gender gender_type NOT NULL,
  role user_type NOT NULL,
  club_role club_role_type,
  home_town VARCHAR,
  major VARCHAR,
  year VARCHAR,
  password VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS Weight_Class(
  weight_class_name VARCHAR,
  gender gender_type,
  min DECIMAL NOT NULL,
  max DECIMAL NOT NULL,
  PRIMARY KEY(weight_class_name,gender)
);

CREATE TABLE IF NOT EXISTS Lift(
  lift_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Member(user_id),
  lift_date DATE NOT NULL,
  type_of_lift lift_type NOT NULL,
  lift_weight DECIMAL NOT NULL,
  body_weight DECIMAL NOT NULL,
  weight_class_name VARCHAR,
  gender gender_type,
  FOREIGN KEY (weight_class_name, gender) REFERENCES Weight_Class (weight_class_name, gender) 
  -- weight_class VARCHAR REFERENCES Weight_Class(weight_class_name, gender)
);

CREATE TABLE IF NOT EXISTS Club_Member(

)

INSERT INTO Weight_Class(weight_class_name, min, max, gender)
  VALUES
  ( '52', 0, 52, 'male' ),
  ( '56', 52, 56, 'male' ),
  ( '60', 56, 60, 'male' ),
  ( '67.5', 60, 67.5, 'male' ),
  ( '75', 67.5, 75, 'male' ),
  ( '82.5', 75, 82.5, 'male' ),
  ( '90', 82.5, 90, 'male' ),
  ( '100', 90, 100, 'male' ),
  ( '110', 100, 110, 'male' ),
  ( '125', 110, 125, 'male' ),
  ( '140', 125, 140, 'male' ),
  ( '140+', 140, 500, 'male' ),

  ( '44', 0, 44, 'female' ),
  ( '48', 44, 48, 'female' ),
  ( '52', 0, 52, 'female' ),
  ( '56', 52, 56, 'female' ),
  ( '60', 56, 60, 'female' ),
  ( '67.5', 60, 67.5, 'female' ),
  ( '75', 67.5, 75, 'female' ),
  ( '82.5', 75, 82.5, 'female' ),
  ( '90', 82.5, 90, 'female' ),
  ( '100', 90, 100, 'female' ),
  ( '100+', 100, 500, 'female' );


