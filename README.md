# Module Content

### Vue + HTML = Templates

### Outputting Dynamic Content

### Reacting to User Input

<hr>

### [1 - Basics](Theory/01-basics)

A fresh start using data binding and explore the principles core feature of Vue

### [Basics Assignment](Assignments/01-basic-assignment-1-problem)

Basic exercise to outputting values using data binding dynamically.

<hr>

### [3 - Events](Theory/03-basics-events)

<ul>
<li>Events & Events with Arguments</li>
<li>Event Modifier</li>
</ul>

**Events**

Here you can find events in action and events with arguments just with a basic counter.

**Event Modifier**

There are a few example of event modifier with the input tag. You can write your name and automatically there is yet a
surname and when you press enter, Vue check the name and display it on screen.

### [Events Assignment](Assignments/03-basics-assignment-2-problem)

Basic exercise to outputting values using events like `on-click` and `on-keydown`

<hr>

### [4 - Two Way Binding](Theory/04-basics-using-the-native-event-object)

#### Data Binding + Event Binding = Two-Way Binding

<ul>
<li>Computed Properties</li>
<li>Watchers</li>
<li>v-on Shorthands</li>
</ul>

**Computed Properties**

Are like methods but with one important difference: Vue will be aware of their dependencies and only re-execute them if
one of the dependencies change

**Watchers**

Is basically a function witch I can tell Vue to execute when one of these dependencies change. It is an alternative to
computed properties.

**v-on Shorthands**

You can replace for example `v-on:click` with `@click` and nothing change; is just a shorthand.

### [Computed & Watchers Assignment](Assignments/04-basics-assignment-3-problem)

A simple exercise create to work with computed properties and watchers. It is a simple counter that when is _less than
37_ it shows **'Not there yet'**, when is _equal to 37_ it shows the **exactly number**
and when is _bigger than 37_ it shows **'Too much!'**. There is also a timer that reset the value after 5 second.

<hr/>

### [5 - Dynamic Styling](Theory/05-basics-dynamic-styling)

Learn how Vue can add dynamic classes in more different ways through computed properties and dynamic classes.

### [Dynamic Styling Assignment](Assignments/05-basics-assignment-4-problem)

Styling dynamically an application.