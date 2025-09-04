---
title: Introduction to Expressions in After Effects – Beginner’s Guide
description: Learn how expressions in After Effects can automate animations and enhance your workflow. A step-by-step introduction.
---

# Introduction to Expressions in After Effects

::: tip 💡 **Want to follow along?**
[Download the free project file](/downloads/after-effects-expressions-introduction-v01.aep){target="_blank" download} with all the examples used in this guide.  
:::


## Why Use Expressions?  

Think of expressions as the code that brings your animations to life. They let you automate those tedious tasks and create effects you'd never be able to pull off with just keyframes.  They're especially useful when you need:
- **Precision Control**: Fine-tune movements with mathematical precision.
- **Dynamic Interactions**: Make elements react to each other automatically.
- **Procedural Effects**: Generate complex animations with simple rules. 
- **Workflow Efficiency**: Save time and effort by automating repetitive tasks.

::: danger Friend or Foe?  
Okay, let's be real – **expressions aren't always the answer**. If something's easily done with keyframes, don't overcomplicate it with code. **[Keep it simple, stupid!](https://www.youtube.com/watch?v=O58A7MJfOwU&ab_channel=OddsN%27EndsYoutube)** But when you need automation and efficiency, expressions are invaluable.  
:::

I know, seeing code can be intimidating at first. But trust me, stick with it! After a little practice, you'll be amazed at what you can do.  And hey, if you find these resources helpful, there's always a way to show your support and help keep NullNoodles going.

## Recommended Learning Resources  

Here are some of the best resources I’ve used (and still highly recommend) for learning expressions:

- The man, the beast, the myth, Dan Ebberts's [legendary blog](https://www.motionscript.com/).
- [Animoplex](https://www.youtube.com/watch?v=SFgWa5G0VAE&list=PLvr5U5ZSt6IzHyvSL9fo0M9NRPsTvra31&ab_channel=Animoplex) has the most in-depth AE Expressions playlist I’ve ever come across.
- [The Power of Expression](https://www.amazon.com/After-Effects-Expression-Francois-Lefebvre/dp/0578404486) by Francois Lefebvre is an absolute must!

Below, you’ll find my own compilation of notes—the way I structured everything in my head to finally make expressions click. Hope it helps you too!

## How to Apply an Expression  

To add an expression to a property, follow these steps:  

1. Hold **Alt (Windows)** or **Option (Mac)** and click on the stopwatch of the property you want to modify.  
2. The expression editor will appear below the property.  
3. Type your expression and press **Enter** to apply it.  
4. You can also use the **pick whip** tool to link properties easily.  

<video autoplay loop muted playsinline width="700">
  <source src="/videos/How_to_Apply_an_Expression.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Understanding Values in Expressions  

One of the most crucial aspects of mastering expressions is understanding values and how they function. Once you grasp how values behave, using expressions becomes much more intuitive.  

### Types of Values  

- **Numbers**: `100`, `3.14`  
- **Strings**: `"Text here"`  
- **Booleans**: `true`, `false`  
- **Arrays**: `[100, 200]` (used for multiple values, like position `[x, y]`)  
- **Objects**: Properties in After Effects are objects containing values.  

### Values in Different Properties  

Each property in After Effects expects a specific type of value:  

- **Position** works with an array `[x, y]` (or `[x, y, z]` for 3D layers).  
- **Scale** also works with an array `[x, y]`.  
- **Rotation** takes a single number, like `90` (degrees).  
- **Opacity** also takes a single number, like `82`.  

A great way to check the value type your expression returns is to use a **Text Layer** and apply the expression to the **Source Text** property:  

```javascript
typeof 63;          // number
```
```javascript
typeof "Hello!";    // string
```
```javascript
typeof [32, 124];   // array
```
```javascript
typeof true;        // boolean
```

Using **Source Text**, you can also link values directly and see real-time updates, making it easier to debug and understand what’s happening.  

## Essential Functions  

### **Random Motion: `wiggle()`** 
This is probably the most well-known expression in After Effects. If you've ever tried to add random motion to a layer, you've likely used `wiggle()`. The `wiggle()` function can return a number or an array, depending on the property where it is applied.

```javascript
wiggle(5, 50);
```
- If used on a **scalar property** (e.g., Opacity, Rotation), it returns a **single number** (e.g., `73.4`). 
- If used on a **vector property** (e.g., Position, Scale, Color), it returns an **array** (e.g., `[540.2, 360.8]`).  

### Applying wiggle() to a Single Axis

Even when `wiggle()` returns an array, you can apply it to only one axis by extracting a single value and keeping the others unchanged. This allows you to transform `wiggle()` into a number inside an array, controlling movement on just one axis.
If you want to apply `wiggle()` only to a specific axis (e.g., only X in Position or Scale), you can isolate the affected component:

```javascript
x = wiggle(3, 50)[0]; // Applies wiggle only to X
y = value[1]; // Keeps Y fixed
[x, y];
```


### **Generating Random Values: `random()`**
The `random()` function generates a new random value at every frame, meaning its output is not smooth over time. Unlike `wiggle()`, `random()` always returns a single number, regardless of the property where it is applied.

```javascript
random(10,50);
```

| Function | Behavior |
|----------|----------|
| `wiggle(frequency, amplitude)`  | Continuously fluctuates values over time, creating smooth variation.  |
| `random(min, max)`  | Generates a new random value at every frame, causing rapid changes.  |

If you need continuous smooth variation, use `wiggle()`. If you need completely random values changing at each frame, use `random()`.


### **Using Time in Expressions: `time`**  
A simple and powerful function is `time`, which returns the current time in seconds.
```javascript
rotation = time * 30;
```
This makes an object rotate 30 degrees per second.

`time` is useful for:
- Creating continuous movement
- Automating animations without keyframes
- Making elements animate at a constant rate



### **Looping Animations: `loopOut()`**  
Instead of copying and pasting keyframes forever, you can use loopOut() to automate that for you.

```javascript
loopOut("cycle");
```
This will make your animation repeat **continuously** after the last keyframe, seamlessly looping it.

Other loop modes include:
- `pingpong` - Alternates forward and backward like a bouncing ball.
- `offset` - Continues the animation forward in the same direction.
- `continue` - Extrapolates the movement beyond the last keyframe.

A good way to check if your loop is working correctly is by opening the **Graph Editor** and enabling the **Show Post-Expression Graph** option. This allows you to visualize how the expression affects the animation over time.

## If/Else Statements  

Conditional statements in expressions allow you to control properties based on logic. This is useful for making automated decisions without manual keyframes. 

```javascript
if (time < 5) {
  100;
} else {
  50;
}
```
This sets the value to 100 for the first 5 seconds and 50 afterward.

You can also use comparisons between properties:
```javascript
if (thisLayer.opacity > 50) {
  200;
} else {
  100;
}
```
Here, if the layer’s opacity is greater than 50, the value will be 200; otherwise, it will be 100.

Using `if/else in` expressions helps automate decision-making, making your animations smarter and more flexible!

## What’s Next?  

Now that you’ve taken your first steps into expressions, where do you go from here?  

If you’re feeling confident, check out **[Top 10 After Effects Expressions You Should Know](/after-effects/expressions/top-10)**.  

If everything still seems confusing—don't worry! Expressions take time to get comfortable with. Just keep practicing, and soon, they’ll become second nature.  

See you in the next guide!