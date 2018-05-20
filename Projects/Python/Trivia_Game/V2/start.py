from tkinter import *
import tkinter.messagebox as box

window = Tk()
window.title('Trivia V2')
window.resizable(0,0)

label = Label(window, text='...')

entrybox = Frame(window)
entry = Entry(entrybox)

Btn = Button(text = 'Submit')

def Q1():
    btn.forget()

    label.pack()
    label.configure(text = 'In what city were the Beatles formed?')
    
    entrybox.pack()
    entry.pack(ipadx = 40)

    Btn.pack(ipadx = 80)
    
btn = Button(text = 'Start')
btn.pack(ipadx = 80, ipady = 10)
btn.configure(command = Q1)

window.mainloop()
