---
title: "Motion Syntax - Day 01"
description: "Introduction to basic assignment operations and arithmetic manipulations in After Effects expressions."
---

# Motion Syntax - Day 1: Basic Assignment and Arithmetic Manipulation

::: tip 💡 **Want to follow along?**
Download the free project file with all the examples used in this guide.  
:::

## Understanding Expressions in After Effects

Every property in After Effects has a value that can be manipulated using expressions. These values remain static unless modified by time-based expressions such as `time`, `wiggle()`, or `valueAtTime()`. For example:

```javascript
transform.opacity = 50; // Sets opacity to 50%
```
```javascript
transform.position = [100, 200]; // Moves layer to x:100, y:200
```

This ensures that the property maintains the assigned value throughout the animation.

## Arithmetic Operations

Arithmetic operations allow for precise control over animations and property values. You can use these operations to create dynamic movements, automate effects, and introduce procedural animation.

For example:

```javascript
transform.opacity = time * 10; // Opacity increases over time
```
```javascript
transform.position = [value[0] + 10, value[1]]; // Moves layer 10 pixels to the right
```

## Combining Multiple Operations

You can combine multiple mathematical operations to create more complex motion. This is useful for generating organic animations, procedural movement, and looping effects.

```javascript
x = Math.sin(time) * 100 + value[0];
y = Math.cos(time) * 50 + value[1];
transform.position = [x, y];
```

This creates an elliptical motion where the layer oscillates in both X and Y directions.

## Working with Components

Each property has sub-components that can be manipulated individually. For example, in a 2D position:

```javascript
transform.position[0] = time * 50; // Moves only in the X direction
transform.position[1] = 200; // Keeps Y constant
```

Similarly, color components can be adjusted separately:

```javascript
fillColor = [1, 0, 0]; // Pure red
fillColor = [time % 1, 0, 1]; // Dynamic color change over time
```

## Important Consideration: Property Scope

Expressions in After Effects operate within the context of a single property. They **cannot** modify other properties or layers directly. Instead, they retrieve and manipulate data from other properties but must return a value compatible with the property they are applied to. This is a common mistake among beginners.

Consider this incorrect example for Rotation:

```javascript
opacity = 50;
```

This will set the value of **Rotation** to `50`, but it will not affect **Opacity**. Each expression only controls the property it is assigned to.

For more insights, check out Dan Ebberts' extensive work on expressions at [motionscript.com](http://motionscript.com).

## Using Index and Layer-Based Values

Another way to create procedural motion is by using the layer index. This approach allows for staggered effects, automated layer arrangements, and controlled variations.

```javascript
transform.opacity = index * 10; // Each layer has a different opacity
```
```javascript
transform.position = [index * 50, 200]; // Stacks layers horizontally
```

Using `index`, you can create structured animations that adjust automatically based on layer order. This is useful for staggered effects like sequential opacity fades, text reveals, and ripple movements.

## Important Consideration: Self-Referencing Expressions

Referencing the same property within an expression can be misleading. When an expression for a property references that same property, it retrieves the **pre-expression value**, which can cause errors.

For example, this will **not** work as expected:

```javascript
opacity = opacity + 1; // Causes an error
```

To correctly animate opacity over time, use:

```javascript
opacity = Math.min(100, value + time * 10); // Gradual increase, capped at 100
```

## Basic Math Manipulation

Expressions support addition, subtraction, multiplication, and division:

```javascript
transform.position = [value[0] + 20, value[1] - 10]; // Moves right and up
```
```javascript
fillColor = [(time * 0.2) % 1, 0, 1]; // Cycles through colors
```

Brackets control order of operations:

```javascript
transform.position = [(value[0] - 6) * 0.3, value[1]];
```

## Practical Exercise

Let’s explore an example where opacity decreases based on a layer’s index:

```javascript
opacity = Math.max(0, 100 - index * 10);
```

This creates a cascading fade effect. Adjusting the multiplier (`10` in this case) changes the fade intensity.

Now, try animating a layer’s position:

```javascript
x = time * 100;
y = Math.sin(time * 2) * 50 + 200;
[x, y];
```

- Observe how the layer moves over time.
- Modify values to change speed and motion behavior.
- Replace `Math.sin(time * 2)` with `Math.cos(time * 3)` to see the difference.

## Challenge

For an additional challenge, try modifying an object's **scale** dynamically based on its position. Use the `linear()` function to map position changes to scale variations:

```javascript
scaleFactor = linear(position[0], 0, 500, 50, 150);
[scaleFactor, scaleFactor];
```

This scales the object between 50% and 150% as it moves along the X-axis from `0` to `500` pixels.

**Can you modify this formula to create a bouncing effect?** Try using:

```javascript
scaleFactor = 100 + Math.abs(Math.sin(time) * 50);
```

or use `clamp()` to limit the movement range.

## Conclusion

This introduction covered fundamental assignment operations and arithmetic manipulations. These principles will serve as a foundation for more advanced expressions in the following lessons.

## Next Steps

Continue learning with [**Day 2: Clamp, Fit, and Waves**](/after-effects/motion-syntax/day-02), where you'll explore how to constrain values, adapt animations dynamically, and create wave-like motion for smoother, more organic animations.
