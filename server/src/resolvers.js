const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome()
    },
    // returns a single Track that will be used to populate the Track detail page of our web client
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id)
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
    },
  }
}

module.exports = resolvers