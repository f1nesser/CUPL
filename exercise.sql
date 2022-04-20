
select user_id, lift.weight_class_name, lift.gender, lift.type_of_lift, MAX(lift.lift_weight) 
    from lift
        group by lift.weight_class_name, lift.type_of_lift, lift.gender
    order by lift.gender, lift.weight_class_name;