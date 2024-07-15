from tkinter import *
import random

#constant variables

GAME_WIDTH = 500
GAME_HEIGHT = 500
BODY_PARTS = 3
FOOD_COLOR = '#FF0000'
SNAKE_COLOR = '#00FF00'
BACKGROUND_COLOR = '#000000'
SPEED = 50
SPACE_SIZE = 50

#classes 

class Snake:
    def __init__(self):
        self.body_size = BODY_PARTS
        self.coordinates = []
        self.squares = []
        for i in range (0,BODY_PARTS):
            self.coordinates.append([0,0])
        for i in self.coordinates:
            square = canvas.create_rectangle(x,y,x+SPACE_SIZE,y+SPACE_SIZE,
                                             fill=SNAKE_COLOR,tag='snake')
            self.squares.append(square)
    

class Food:
    def __init__(self):

        x = random.randint(0,450)
        y = random.randint(0,450)

        self.coordinates = [x,y]
        canvas.create_oval(x,y,x+SPACE_SIZE,y+SPACE_SIZE,fill=FOOD_COLOR,tag='food')

        

class next_turn():
    def next_turn(snake,food):

       x,y = snake.coordinates[0]
       if direction == 'up':
            y -= SPACE_SIZE
       elif direction == 'down':
           y += SPACE_SIZE
       elif direction == 'left':
           x -= SPACE_SIZE
       elif direction == 'right':
           x += SPACE_SIZE

       snake.coordinates.insert(0(x,y))
       square = Canvas.create_rectangle(x,y,x+SPACE_SIZE,y+SPACE_SIZE,fill=SNAKE_COLOR)
       snake.squares.insert(0,square)
       del snake.coordinate[-1]
       canvas.delete(snake.square[-1])
       del snake.squares[-1]
       window.after(SPEED,next_turn,snake,food)
    

    

class change_direction:
    pass

class check_collisions:
    pass

class game_over:
    pass

window = Tk()
window.title("Snake Game")
window.resizable(False,False)

score = 0
direction = 'down'

label = Label(window,text='score: {}'.format(score),font=('consolas',30))
label.pack()

canvas = Canvas(window,bg=BACKGROUND_COLOR,height=GAME_HEIGHT,width=GAME_WIDTH)
canvas.pack()

window.update()
window_width = window.winfo_width()
window_height = window.winfo_height()
screen_width = window.winfo_screenwidth()
screen_height = window.winfo_screenheight()
x = int((screen_width/2)-(window_width/2))
y = int((screen_height/2)-(screen_height/2))

window.geometry(f"{window_width}x{window_height}+{x}+{y}")

snake = Snake()
food = Food()
next_turn(snake,food)
window.mainloop()


#.....To be continued