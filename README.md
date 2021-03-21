# Daily Planner

*A simple website which uses local storage to keep a schedule for each hour of the working day, and colours to indicate past, current and future events.*

A glorified to do list, basically.

## The process

It uses one line of JS to return the current hour of the day using Moment,
and then for each hour of the planner it checks if it is higher, lower or the same in order to
assign the past/current/future colour codes.

I used Bootstrap for the styling. The ease of use and quickness are both very appealing, but I will stick with plain CSS as I don't want to rely too heavily on a crutch whilst I'm still learning.

JQuery is imported in the code, however save for one line I have not touched it. I find using vanilla javascript is as fast if not faster anyway with intellisense and does everything (that I know of with my current knowledge) that JQuery does.

Overall it was a fairly straight forward project. I ended up generating the planner elements with Javascript, just because. One issue I encountered, and a thing to remember for the future, is that local storage is shared among subdomains. I was getting errors because the site was trying to access items which used the same key names set by a different site.

## Finished project  

![Finished site](/assets/images/screenshot)

[Link to site](https://bytemybits.github.io/daily-planner/)

