select user_name, first_name, last_name, weight_class, lift_weight, type_of_lift, gender 
    from member inner join lift on member.user_id = lift.user_id
    where type_of_lift = 'bench' order by lift_weight desc;