def echo(user, lang, sys):
    print('User:', user, 'Language:', lang, 'Platform:', sys)
echo('Mike', 'Python', 'Windows')
echo(user = 'Anne', lang = 'Python', sys = 'Mac OS',)
def mirror(user = 'Carole', lang = 'Python'):
    print('\nUser:', user, 'Language:', lang)
mirror()
mirror(lang = 'Java')
mirror(user = 'Tony')
mirror('Susan', 'C++')
