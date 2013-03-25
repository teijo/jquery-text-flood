jQuery text flood
=================

The plugin does binary search to find and set maximum font size for text that
can be used without text leaking outside of its container. Current approach
does not guarantee perfect fit.

Usage:

```JavaScript
// <div class="selector" style="width: 200px; height: 300px;">Some text</div>
$('.selector').textFlood()
```
View index.html or check GitHub page of this project for examples:
http://teijo.github.com/jquery-text-flood/
