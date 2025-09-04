---
title: "Motion Syntax - Day 7: Using valueAtTime() for Time-Based Animations"
description: "Learn how to use valueAtTime() in After Effects expressions to create motion trails, time delays, predictive motion, and physics-based effects."
---

# Motion Syntax - Day 7: Using `valueAtTime()` for Time-Based Animations

## Introduction

Time-based expressions allow us to manipulate properties dynamically by referencing values at different moments in an animation. The `valueAtTime()` function is essential for creating time-delayed effects, motion trails, and physics-based interactions. This function lets us retrieve the value of a property at a specific time, enabling procedural motion without keyframes.

### In this lesson, you will learn how to:
✅ Use `valueAtTime()` to reference past or future values.  
✅ Create motion trails and delayed animations.  
✅ Build expressions that react dynamically to time.  

## Understanding `valueAtTime()`

The `valueAtTime(t)` function returns the value of a property at a specified time `t`. This is useful for lagging effects, lookahead motion, and time-offset animations. Unlike manually keyframing similar effects, `valueAtTime()` allows for dynamic and procedural motion, making animations more flexible and adaptable to changes in timing or layer behavior without requiring manual adjustments.

### Example 1: Creating a Simple Delay Effect

```javascript
thisComp.layer("Leader").transform.position.valueAtTime(time - 0.5);
```

📌 **Tip:** This makes the layer follow the "Leader" layer with a `0.5`-second delay.

## Using `valueAtTime()` for Motion Trails

A common use case for `valueAtTime()` is creating motion trails, where an object leaves behind a trace of its past movement.

### Example 2: Creating a Motion Trail

```javascript
delay = index * 0.1;
thisComp.layer("Main Object").transform.position.valueAtTime(time - delay);
```

📌 **Tip:** When applied to multiple layers, each layer follows the leader with increasing delay, creating a staggered motion effect. The `index * 0.1` value determines the spacing between the layers in time—lower values create a tighter grouping, while higher values result in a more pronounced delay between each layer's movement.

## Predicting Future Values with `valueAtTime()`

Instead of referencing past values, we can look ahead in time to create predictive motion.

### Example 3: Predicting Future Position for Lookahead Motion

```javascript
futureTime = time + 0.2;
thisComp.layer("Mover").transform.position.valueAtTime(futureTime);
```

📌 **Tip:** This makes an object move towards where the target will be, simulating anticipation.

## Combining `valueAtTime()` with Physics-Based Motion

By combining `valueAtTime()` with velocity calculations, we can simulate secondary motion and drag effects.

### Example 4: Simulating Drag or Lagging Motion

```javascript
lag = 0.2;
previousPos = transform.position.valueAtTime(time - lag);
velocity = transform.position - previousPos;
transform.position - velocity * 0.5;
```

📌 **Tip:** This makes the object lag behind its own movement, simulating resistance. Increasing the `lag` value makes the object react more slowly, exaggerating the effect and making it feel heavier or more fluid. Decreasing the `lag` value makes the response more immediate, useful for effects like subtle inertia in UI elements or fast-paced character movements.

## Advanced Uses of `valueAtTime()`

We can use `valueAtTime()` to create interactive animations, where an object's behavior changes based on past or future states.

### Example 5: Scaling an Object Based on Past Speed

```javascript
timeOffset = 0.1;
previousPos = transform.position.valueAtTime(time - timeOffset);
speed = length(transform.position - previousPos);
linear(speed, 0, 200, 100, 200);
```

📌 **Tip:** This makes the object's scale increase when it moves faster, useful for dynamic effects.

### Example 6: Delayed Rotation Based on Position Changes

```javascript
delay = 0.3;
prevPos = transform.position.valueAtTime(time - delay);
direction = normalize(transform.position - prevPos);
rotation = degrees(atan2(direction[1], direction[0]));
rotation;
```

📌 **Tip:** The layer rotates smoothly in response to motion, mimicking real-world physics. This technique is especially useful for animating characters turning naturally toward movement direction, making transitions feel more fluid and realistic.

## Practical Exercises

- Create a motion trail using `valueAtTime()`.
- Make an object follow another with a time delay.
- Use `valueAtTime()` to predict future movement and adjust rotation.
- Create a speed-sensitive scaling effect.
- Experiment with combining `valueAtTime()` and physics to introduce controlled randomness over time.

### **Final Challenge:**
Build an animation where multiple layers follow a leader, each reacting with a different delay and rotation.

## Conclusion

The `valueAtTime()` function is a powerful tool for procedural motion, allowing layers to react dynamically to time-based changes. By leveraging past and future values, you can create lagging effects, predictive animations, and physics-based interactions.

🚀 **Next Up:** Arrays and Loops – Enhancing Expressions with Iteration!
