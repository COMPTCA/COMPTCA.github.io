from tkinter import *
import tkinter.messagebox as box

def Questions():
    window = Tk()
    window.title('No.1')
    window.resizable(0, 0)

    answerbox = Frame(window)
    answer = Entry(answerbox)
    label = Label(window, text = 'In what city were the Beatles formed?')
    submitBtn = Button(window)

    def QuestionAnswers():
        if answer.get() == 'Liverpool':
            box.showinfo('Correct', 'Correct! The answer is...Liverpool')

            window = Tk()
            window.title('No. 2')
            window.resizable(0, 0)

            answerbox = Frame(window)
            answer2 = Entry(answerbox)
            label = Label(window, text = 'What year were the Beatles formed?')
            submitBtn = Button(window)

            def Question2Answer():
                if answer.get() == '1960':
                    box.showinfo('Correct', 'Correct! The answer is...1960')
                else:
                    box.showinfo('Incorrect', 'Incorrect. Try again.')

            label.pack(side = TOP)
            answer2.pack(ipadx = 35)
            answerbox.pack(padx = 5, pady = 2)
            submitBtn.pack(ipadx = 80, side = RIGHT)
            submitBtn.configure(text = 'Submit', command = Question2Answer)
        else:
            box.showinfo('Incorrect', 'Incorrect. Try again.')

    label.pack(side = TOP)
    answer.pack(ipadx = 35)
    answerbox.pack(padx = 5, pady = 2)
    submitBtn.pack(ipadx = 80, side = RIGHT)
    submitBtn.configure(text = 'Submit', command = QuestionAnswers)
