const player_id = 660271

function getPlayerInfo(fetch) {
	const url = `https://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='${ player_id }'`

	return fetch(url)
		.then(res => res.json())
		.then(json => json.player_info.queryResults.row)
}

function getStat(fetch, season, game_type, sport) {
	const url = `https://lookup-service-prod.mlb.com/json/named.sport_${ sport }_tm.bam?league_list_id='mlb'&game_type='${ game_type }'&season='${ season }'&player_id='${ player_id }'`

	return fetch(url)
		.then(res => res.json())
		.then(json => json[`sport_${ sport }_tm`].queryResults.row)
}

export default async function(fetch) {
	const [
		playerInfo,
		h_2022_R, p_2022_R,
		h_2022_S, p_2022_S,
		h_2021_R, p_2021_R,
	] = await Promise.all([
		getPlayerInfo(fetch),
		getStat(fetch, 2022, 'R', 'hitting'),
		getStat(fetch, 2022, 'R', 'pitching'),
		getStat(fetch, 2022, 'S', 'hitting'),
		getStat(fetch, 2022, 'S', 'pitching'),
		getStat(fetch, 2021, 'R', 'hitting'),
		getStat(fetch, 2021, 'R', 'pitching'),
	])

	return {
		playerInfo,
		stats: {
			2022: {
				R: [h_2022_R, p_2022_R],
				S: [h_2022_S, p_2022_S],
			},
			2021: {
				R: [h_2021_R, p_2021_R],
			}
		}
	}
}
