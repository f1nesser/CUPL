#create lifts
import datetime
import json

def get_userid(lift, people_list):
  for person in people_list:
    if lift['first_name'] == person['first_name'] and lift['last_name'] == person['last_name']:
      return person['user_id']
  exit('no use match')


# need to fix men and womens differences
lift_types = ['deadlift', 'bench', 'squat']
f = open('insertExampleLifts.sql', "w")
lifts = json.loads(open('../roster_and_lift_data/lifts.json').read())
people = json.loads(open('members.json').read())
# print(lifts)

f.write('INSERT INTO lift(user_id, lift_date, type_of_lift, lift_weight, body_weight)\n VALUES\n')

for lift in lifts:
  user_id = get_userid(lift,people)
  lift_date = '2000-01-01' #default date
  body_weight = lift['body_weight']
  for lift_type in lift_types:
    f.write(f'\t({user_id}, \'{lift_date}\', \'{lift_type}\', {lift[lift_type]}, {body_weight}),\n' )
      
print('dont forget to delete the last comma!!!')
