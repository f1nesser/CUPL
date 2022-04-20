#create 
import string
import json
import random

people = json.loads(open('./members.json').read())
f = open('./insertExampleMembers.sql', "w")
f.write('INSERT INTO member(user_name, first_name, last_name, gender, role, password)\n VALUES\n')

for person in people:
  first_name = person['first_name']
  last_name = person['last_name']
  user_name = first_name + last_name
  gender = person['gender']
  admin = 'user'
  pswd = '123'
  f.write(f'\t(\'{user_name}\', \'{first_name}\', \'{last_name}\', \'{gender}\', \'{admin}\', \'{pswd}\'),\n')

#last insert requires no comma
user_name = 'finesser'
first_name = 'riley'
last_name = 'iwanaga'
gender = 'male'
admin = 'admin'
pswd = 'finesser'
f.write(f'\t(\'{user_name}\', \'{first_name}\', \'{last_name}\', \'{gender}\', \'{admin}\', \'{pswd}\')\n')
