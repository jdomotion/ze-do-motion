---
title: Top 10 Essential After Effects Expressions for Animators
description: Boost your animation workflow with these 10 must-know After Effects expressions. Perfect for beginners and advanced users.
---


# Top 10 After Effects Expressions You Should Know

::: tip 💡 **Want to follow along?**
[Download the free project file](/downloads/after-effects-expressions-top10-v01.aep){target="_blank" download} with all the examples used in this guide.  
:::

If you're here, you probably already know what expressions are. So let's skip the long intro and jump straight into the top 10 expressions that will boost your After Effects workflow. If you need a refresher, check out our [Introduction to Expressions in After Effects](/after-effects/expressions/introduction).

## 1. Wiggle

If there’s one expression everyone learns first, it’s `wiggle()`. Even people who’ve never touched expressions know it. But trust me, there’s more to it than just throwing in `wiggle(5,50)` and calling it a day. If you want to go deeper and pick up some tricks, I’ve got a full post on it [here](/).

**Syntax:**
```javascript
wiggle(frequency, amplitude);
```
- `frequency`: Number of oscillations per second.
- `amplitude`: Magnitude of the oscillation.

**Example:**
```javascript
wiggle(2, 30);
```
This makes the property oscillate 2 times per second within a range of 30 units.

## 2. Loop

Tired of duplicating keyframes just to keep an animation going? `loopOut()` is your friend. Cycle, ping-pong, offset, continue—each does something different. If you want a clear breakdown of when to use each, the guys at [School of Motion](https://www.schoolofmotion.com/blog/loop-expression-after-effects) nailed it here.

**Syntax:**
```javascript
loopOut(type = "cycle", numKeyframes = 0);
```
```javascript
loopIn(type = "cycle", numKeyframes = 0);
```
- `type`: Type of loop (`"cycle"`, `"pingpong"`, `"offset"`, `"continue"`).
- `numKeyframes`: Number of keyframes included in the loop.

**Example:**
```javascript
loopOut("pingpong");
```
```javascript
loopOut("pingpong", 1); // this one will loop only the last 2 keyframes
```
Repeats the animation indefinitely after the last keyframe.

## 3. Time

Want something that just keeps moving on its own? `time` is perfect for that. No keyframes, just a constant motion. I even used it to solve a problem in one of my projects—might write about it soon.

**Example:**
```javascript
rotation = time * 45;
```
This rotates the layer continuously at a rate of 45 degrees per second.

But `time` isn't just for simple movements—you can create some really clever effects with it. I'm working on a guide, but until then, check out this great article by [Dan Ebberts](https://www.motionscript.com/articles/speed-control.html).

:::tip
Yes, I know I already showed these three expressions in the introduction, but it's just to remind you that these are the kings, and you'll use them in almost every project!
:::

## 4. ValueAtTime

Ever wanted a layer to follow another with a delay? `valueAtTime()` is how you do it. It grabs a property’s value at any time you choose. I might put together some cool examples for this one, but for now, try messing with it like this:

**Syntax:**
```javascript
valueAtTime(time - delay);
```

**Example:**
```javascript
delay = 0.5;
thisComp.layer("Layer Name").transform.position.valueAtTime(time - delay);
```
This makes the current layer’s position follow another layer with a 0.5-second delay.

## 5. Linear

`linear()` is one of those expressions that seems weird at first but becomes second nature once you get it.

**Syntax:**
```javascript
linear(t, tMin, tMax, value1, value2);
```

**Example:**
```javascript
linear(time, 0, 5, 0, 100);
```
This transitions a property from `0` to `100` over the first 5 seconds.

I still prefer text over video, but I gotta admit, Jake’s video on this is really solid. Check it out [here](https://www.youtube.com/watch?v=2h9ZfUHVG6Q&ab_channel=JakeInMotion).

## 6. Ease

Like `linear()`, but smoother. If you want something to speed up and slow down naturally, `ease()` is what you need. Super useful for controlling motion curves inside expressions.

**Syntax:**
```javascript
ease(t, tMin, tMax, value1, value2);
```

**Example:**
```javascript
ease(time, 0, 5, 0, 100);
```
This smoothly increases a property from `0` to `100` over 5 seconds.

## 7. Clamp

Ever had a value go too high or too low and mess everything up? `clamp()` stops that. It keeps values locked inside a range so nothing goes out of control.

**Syntax:**
```javascript
clamp(value, min, max);
```

**Example:**
```javascript
clamp(transform.position[0], 100, 500);
```
This limits a layer’s X position between 100 and 500 pixels.

And I really like using this together with `wiggle()` too, as it helps keep the motion within a controlled range.
```javascript
clamp(wiggle(2, 50), 100, 500);
```
This ensures that the wiggle() motion stays within the range of 100 to 500 pixels.

## 8. SeedRandom and Random

`random()` is like wiggle’s unpredictable cousin. It just spits out numbers with no control. If you need randomness but want more consistency with `seedRandom()` and less chaos, I put together a full guide on it here.

**Syntax:**
```javascript
seedRandom(seed, timeless = false);
random(minValue, maxValue);
```

**Example:**
```javascript
seedRandom(index, true);
random(0, 100);
```
This generates a random value between `0` and `100` with a unique seed based on the layer index.

## 9. LookAt

Want a layer to always face another? `lookAt()` handles that automatically. No need to manually animate rotations. I’ll add some GIFs here later because it’s way easier to see than explain.

**Syntax:**
```javascript
lookAt(fromPoint, toPoint);
```

**Example:**
```javascript
lookAt(transform.position, thisComp.layer("Target").transform.position);
```
This makes the current layer face the position of the "Target" layer.

## 10. posterizeTime

Sometimes you don’t want smooth motion—you want that stepped, stop-motion feel. That’s what `posterizeTime()` is for. Set a frame rate, and it forces everything to stick to it.

**Example:**
```javascript
posterizeTime(12);  
transform.position;  
```
Super handy for stylized animations!

## Practical Example: Typewriter Effect
A great way to apply expressions is by combining everything we've covered so far into a practical effect. While After Effects has a built-in Typewriter preset, creating our own version allows for much more individual control. One example is building a typewriter effect that adapts its speed based on the text length and includes a blinking cursor.

```javascript
textContent = text.sourceText;
maxSpeed = 0.2;
minSpeed = effect("animation speed")("Slider");
cursorBlinkRate = effect("cursor speed")("Slider");

speed = linear(textContent.length, 5, 20, maxSpeed, minSpeed);

t = Math.max(time - inPoint, 0);

charCount = Math.floor(t / speed);
animatedText = textContent.substr(0, charCount);

cursorBlink = Math.floor(t / cursorBlinkRate) % 2 ? "|" : " ";

cursorEnabled = effect("cursor on/off")("Checkbox");
finalCursor = cursorEnabled == 1 ? cursorBlink : "";

animatedText + finalCursor;

```

- The typing speed dynamically adapts based on the text length—shorter words are typed faster, while longer sentences take more time. This is controlled by the "Speed" slider and adjusted using a `linear()` function.
- The cursor blinks on and off at an interval set by the "Cursor Speed" slider, using a `Math.floor()` function to alternate between visible and hidden states.
- The text progressively appears character by character, driven by time calculations that determine how many characters should be visible at any given moment.
- The cursor can be enabled or disabled using the "Cursor On/Off" checkbox, providing flexibility in styling.

::: tip Your turn
Adjust the sliders to fine-tune the typing speed and cursor behavior for a fully customizable typewriter effect!
:::

## Conclusion

Expressions are a powerful way to speed up your workflow and automate animations. Try combining multiple expressions in a project to see how they interact. Want a challenge? Apply these expressions to a real-world animation and experiment with the results!
