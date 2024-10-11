import { error } from '@sveltejs/kit';
import { lessons } from '../../data.js';

export function load({ params }) {
	const lesson = lessons.find((lesson) => lesson.slug === params.slug);

	if (!lesson) throw error(404);

	return {
		lesson
	};
}
