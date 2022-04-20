DROP FUNCTION categorize_weightClass CASCADE;

CREATE OR REPLACE FUNCTION categorize_weightClass() RETURNS trigger AS $$
  DECLARE 
    lifters_gender gender_type;
    weight_class Weight_Class%rowtype;
  BEGIN
    SELECT gender into lifters_gender from member where user_id = NEW.user_id;
          -- RAISE NOTICE '%', lifters_gender;
      FOR weight_class IN
        SELECT * FROM Weight_Class where gender = lifters_gender
      LOOP
        IF (NEW.body_weight < weight_class.max and NEW.body_weight >= weight_class.min) THEN
          NEW.weight_class_name := weight_class.weight_class_name;
          NEW.gender := weight_class.gender;
          RETURN NEW;
        END IF;
      END LOOP;
      RETURN NEW;
  END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER categorize_weightClass BEFORE INSERT ON Lift
  FOR EACH ROW EXECUTE PROCEDURE categorize_weightClass();