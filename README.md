# Shimmer Interactive Display

When I was first diving into programming, I was excited to learn that coding could be used to make art. 
I was recently inspired to make something quite out of the ordinary. The inspiration came from a building in Denver
called 'The Spire'. 


The Spire has thousands of metal plates that move in the wind, creating a spectacular display. I wondered how I could make a 
scaled down/digital version of this kind of installation.

After consulting with a few people I solidified my idea which became this project. Creating this was incredibly challenging,
not the least because there was no tutorial on how to make it. This project required an immense amount of trial & error, and
peicing together a lot of disparate elements.

## The Idea

Below is a diagram of how the installation works, basically, a camera detects motion and the program tells an arduino to turn on 3 fans, which push air over a board of aluminium pendants.


## The non-tech

The non-tech element of this project required 664 aluminum stamping blanks nailed to a board in a tight array. 
The stamping blanks (or pendants) needed 


## The Tech

I first worked on the JavaScript to detect motion. After researching and running through a tutorial, I refactored some code from ... to fit my purposes. A big thanks to ... for making his code available.

Next I had to figure out how to tell the fans to turn on and off. Originally I began using a Raspberry Pi, however with just 3 weeks to complete the whole thing, the Pi added a layer of complexity that slowed me down. I shifted to using an Arduino which helped simplify the project and fit within the 3 week deadline. The computer connected to the Arduino which connected to a relay whcih controlled the fans. 

At first I used DC power 12V fans, but they werte simply not powerful enough, I switched to AC powered fans which required a bit of electrical engineering and extra precautions since AC power can be deadly.

## All Together

Here is the final product as of 12/14/17
