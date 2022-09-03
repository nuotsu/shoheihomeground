import groq from 'groq'

export const live = groq`!(_id in path('drafts.**'))`
