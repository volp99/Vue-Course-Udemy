# Module Content

Learn how to render content conditionally if certain condition are met with:

<ul>
<li>v-if</li>
<li>v-else / v-else-if</li>
<li>v-show</li>
<li>v-for</li>
</ul>

### v-if

Is like a simple if JavaScript condition, but you can use it in inside your HTML and execute methods.

### v-else / v-else-if

Is the else of a JavaScript condition.

> It must be use directly after a v-if condition

Here is an example:

```
WRONG

<p v-if="goals.length === 0">Some text...</p>

<p>hey, v-else here can't work with beacause I'm in the middle!</p>

<ul v-else>
     <li>Goal</li>
</ul>
```

```
CORRECT

<p v-if="goals.length === 0">Some text...</p>

<ul v-else>
     <li>Goal</li>
</ul>

<p>v-else now works beacause there is nothing in the middle :) </p>
```

### v-show

Is an alternative of using v-if; it doesn't work together with v-else or v-else-if.

The main difference instead using v-show than v-if is that v-show hide the element in the DOM with a display none while
v-if remove completely the element.

**So which is the best practice?**

You have to use v-show when you have one or more elements that them visibility change a lot; for example when you have a
button that toggles elements, and it's switching the visibility all the time.

In other cases you have to use v-if.

### v-for

Help us output content that's repeated.
For example loop numbers to ten:

```
 <ul>
    <li v-for="num in 10">{{num}}</li>
  </ul>
```

Or loop object:

```
 <ul>
    <li v-for="num in 10">{{num}}</li>
  </ul>
```

> **A best practice**
>
> v-for must be followed by a unique key which in the most cases is the id.
>
> In this case you help Vue to define the exact element you want to delete and improve performance.

### [Assignment](Assignments/01-lists-conditionally-assignment-problem)

Create a task list with the Vue conditional statement.
You can add a task and hide it.
