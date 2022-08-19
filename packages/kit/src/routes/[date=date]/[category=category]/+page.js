import { redirect } from '@sveltejs/kit'

export async function load({ params }) {
	const { date } = params

	throw redirect(307, `/${ date }`)
}
