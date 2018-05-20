Q1 = '\nIn what city were the Beatles formed?'
A1 = 'Liverpool'
GreenLight = True
while GreenLight == True:
    print(Q1, end = ' ')
    G1 = input()
    if G1 == A1:
        print('Correct! The answer is...' + A1)
        break
    if G1 == A1.upper():
        print('Correct! The answer is...' + A1)
        break
    elif G1 == A1.lower():
        print('Correct! The answer is...' + A1)
        break
    elif G1 == A1.capitalize():
        print('Correct! The answer is...' + A1)
        break
    elif G1 == A1.title():
        print('Correct! The answer is...' + A1)
        break
    else:
        print('Incorrect. Try again. ')
        GreenLight == False

Q2 = '\nWhat year were the Beatles formed?'
A2 = 1960
GreenLight = True
while GreenLight == True:
    print(Q2, end = ' ')
    G2 = input()
    if not G2.isdigit():
        print('Invalid! Type only numbers. ')
    elif int(G2) == int(A2):
        print('Correct! The answer is...' + str(A2))
        break
    else:
        print('Incorrect. Try again. ')
        GreenLight == False

Q3 = '\nWhat were the names of the members of the Beatles? First names only in alphabetical order.'
A3 = 'George, John, Paul, Ringo'
GreenLight = True
while GreenLight == True:
    print(Q3, end = ' ')
    G3 = input()
    if G3 == A3:
        print('Correct! The answer is...' + A3)
        break
    elif G3 == A3.upper():
        print('Correct! The answer is...' + A3)
        break
    elif G3 == A3.lower():
        print('Correct! The answer is...' + A3)
        break
    elif G3 == A3.capitalize():
        print('Correct! The answer is...' + A3)
        break
    elif G3 == A3.title():
        print('Correct! The answer is...' + A3)
        break
    else:
        print('Incorrect. Try again. ')
        GreenLight == False

Q4 = '\nHow did the beatles build their reputation? By...'
A4 = 'Playing clubs'
GreenLight = True
while GreenLight == True:
    print(Q4, end = ' ')
    G4 = input()
    if G4 == A4:
        print('Correct! The answer is...' + A4)
        break
    elif G4 == A4.upper():
        print('Correct! The answer is...' + A4)
        break
    elif G4 == A4.lower():
        print('Correct! The answer is...' + A4)
        break
    elif G4 == A4.capitalize():
        print('Correct! The answer is...' + A4)
        break
    elif G4 == A4.title():
        print('Correct! The answer is...' + A4)
        break
    else:
        print('Incorrect. Try again. ')
        GreenLight == False

Q5 = '\nWhere did they build their reputation?'
A5 = 'Liverpool and Hamburg'
GreenLight = True
while GreenLight == True:
    print(Q5, end = ' ')
    G5 = input()
    if G5 == A5:
        print('Correct! The answer is...' + A5)
        break
    elif G5 == A5.upper():
        print('Correct! The answer is...' + A5)
        break
    elif G5 == A5.lower():
        print('Correct! The answer is...' + A5)
        break
    elif G5 == A5.capitalize():
        print('Correct! The answer is...' + A5)
        break
    elif G5 == A5.title():
        print('Correct! The answer is...' + A5)
        break
    else:
        print('Incorrect. Try again. ')
        GreenLight == False

Q6 = '\nWhat was the Beatles first hit?'
A6 = 'Love Me Do'
while GreenLight == True:
    print(Q6, end = ' ')
    G6 = input()
    if G6 == A6:
        print('Correct! The answer is...' + A6)
        break
    elif G6 == A6.upper():
        print('Correct! The answer is...' + A6)
        break
    elif G6 == A6.lower():
        print('Correct! The answer is...' + A6)
        break
    elif G6 == A6.capitalize():
        print('Correct! The answer is...' + A6)
        break
    elif G6 == A6.title():
        print('Correct! The answer is...' + A6)
        break
    else:
        print('Incorrect. Try again. ')
        GreenLight == False

Q7 = '\nWhat year was the Beatles first hit released?'
A7 = 1963
GreenLight = True
while GreenLight == True:
    print(Q7, end = ' ')
    G7 = input()
    if not G7.isdigit():
        print('Invalid! Type only numbers. ')
    elif int(G7) == int(A7):
        print('Correct! The answer is...' + str(A7))
        break
    else:
        print('Incorrect. Try again. ')
        GreenLight == False

Q8 = '\nWhat year did the Beatles break up?'
A8 = 1970
GreenLight = True
while GreenLight == True:
    print(Q8, end = ' ')
    G8 = input()
    if not G8.isdigit():
        print('Invalid! Type only numbers. ')
    elif int(G8) == int(A8):
        print('Correct! The answer is...' + str(A8))
        break
    else:
        print('Incorrect. Try again. ')
        GreenLight == False
