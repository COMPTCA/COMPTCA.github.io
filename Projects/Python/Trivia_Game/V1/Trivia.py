from tkinter import *
import tkinter.messagebox as box
import Def as Def

window = Tk()
window.title('Start Menu')
window.resizable(0, 0)

startbtn = Button(window)
startbtn.pack(side = LEFT, ipadx = 100)
startbtn.configure(text = 'Start', command = Def.Questions)

window.mainloop()
