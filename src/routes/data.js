// Each lesson becomes it's own distinct page, where the slug corresponds to the url
// We have attempted to make proper formatting on the content, however it seems to not work
// unless you put in all in the head? which is a bad way of doing that
// TODO: add proper formatting to content
export const lessons = [
	{
		slug: 'java1',
		title: "Java Basics 101: Variables",
		content:
			`<p>(If you’re familiar with programming, you can skim this section to get an idea of how Java syntax works)</p>
			<h3>What is a variable?</h3>
			<p>Variables are like a labeled box. The box has a name but what’s inside of it can always be changed. For example I have a box named “x”: what's within box x could be a number, it could be a name, it could be anything.</p>
			<p>For now let's just say the box “x” has the number two within it:</p>
			<code>x = 2;</code>
			<p>If we want to change what 'x' is we could say on a later line of code that 'x = 4' for example:</p>
			<code>x = 2; <br> x = 4;</code>
			<p>Now since we are using Java we also have to specify what kind of variable 'x' is. 
			In other words we need to put a second label on our box x, one saying, for example, integer: </p>
			<code> int x = 2; <br> x = 4; </code>
			<p>One thing to note in the code above is the fact that we only need to label x as an integer the first time. 
			There are many different types of data in Java beyond int, and those will be explained in the section below.</p>
			<p>You can do many things with just integers such as addition, subtraction, or even multiplication!</p>
			<code>int x = 2; <br> int y = 3; <br> int z = 2 * x + 3 * y; // z is 13 </p>
			`
	},

	{
		slug: 'java2',
		title: 'Java Basics 201: Variables, If-Statements, For-Loops, and Functions',
		content:
			`
			<h3>Variables</h3>
			<p> I am assuming you know what a variable is. If not, read Basics 101! <br>
			In our code, we mainly use 5 types of variables: int, float, double, boolean, and String. <br> <br>
			int stands for integer, and is exactly what it sounds like. It stores positive numbers, negative numbers, and zero, but no fractions or decimals. <br>
			For example, we could say <code>int age = 16;</code> <br>
			float also holds numbers, but additionally can store decimals.
			</p>
			`
    },
	{
		slug: 'java3',
		title: 'Java Classes 101: Methods, Properties, and Object Oriented Programming',
		content: 
			'<p>yipee objects voila.</p>'
	},
	{
		slug: 'java4',
		title: 'Java Classes 201: Inheritence, Public/Private/Protected',
		content:
			'<p>yipee objects voila.</p>'
	}
];
