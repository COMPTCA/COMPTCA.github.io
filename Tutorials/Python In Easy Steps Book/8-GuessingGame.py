import random

num = random.randint(1, 20)
flag = True
guess = 0

print('Guess my number 1-20: ', end = ' ')

while flag == True:

    guess = input()
    if not guess.isdigit():
        print('Invalid! Enter only digits 1-20')
        break
    elif int(guess) < num:
        print('Too low. Try again: ', end = ' ')
    elif int(guess) > num:
        print('Too high. Try again: ', end = ' ')
    else:
        print('Correct...My number is ' + guess)
        flag = False
