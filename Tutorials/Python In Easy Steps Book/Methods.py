class Person:
    '''A base class to define Person properties.'''
    def __init__(self, name):
        self.name = name
    def speak(self, msg = '(Calling The Base Class)'):
        print(self.name, msg)


class Man(Person):
    '''A derived class to define Man properties.'''
    def speak(self, msg):
        print(self.name, ':\n\tHello!', msg)
        

class Hombre(Person):
    '''A derived class to define Hombre properties.'''
    def speak(self, msg):
        print(self.name, ':\n\tHola!', msg)
