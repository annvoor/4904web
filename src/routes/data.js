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
			<code>x = 2;</code>
			<br>
			<code>x = 4;</code>
			`
	},

	{
		slug: 'java2',
		title: 'Java Basics 201: Variables, If-Statements, For-Loops, and Functions  <strong>Start here if you have some programming experience!</strong>',
		content:
			'<p>if if then if unless else elses bc no if.</p>'
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
